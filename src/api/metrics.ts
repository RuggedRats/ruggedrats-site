import axios from 'axios';
import { Connection, PublicKey } from '@solana/web3.js';

// In-memory cache to reduce API calls
interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Helper function to check if cache is valid
const isCacheValid = (entry: CacheEntry): boolean => {
  return Date.now() - entry.timestamp < CACHE_DURATION;
};

// Helper function to get cached data or fetch new data
const getCachedOrFetch = async <T>(
  key: string,
  fetchFn: () => Promise<T>
): Promise<T> => {
  const cached = cache.get(key);
  
  if (cached && isCacheValid(cached)) {
    return cached.data;
  }
  
  try {
    const data = await fetchFn();
    cache.set(key, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    if (cached) {
      console.warn(`Failed to fetch ${key}, using cached data:`, error);
      return cached.data;
    }
    throw error;
  }
};

// Fetch Twitter follower count using Twitter API v2
const fetchTwitterFollowers = async (): Promise<number | null> => {
  const bearerToken = import.meta.env.VITE_TWITTER_BEARER_TOKEN;
  
  if (!bearerToken || bearerToken === 'your_twitter_bearer_token_here') {
    console.warn('Twitter Bearer Token not configured');
    return null;
  }
  
  return getCachedOrFetch('twitter_followers', async () => {
    try {
      const username = import.meta.env.VITE_TWITTER_USERNAME || 'RuggedRatsToken';
      
      const response = await axios.get(
        `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`,
        {
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      return response.data.data?.public_metrics?.followers_count || 0;
    } catch (error) {
      console.error('Error fetching Twitter followers:', error);
      throw error;
    }
  });
};

// Fetch Telegram member count using Telegram Bot API
const fetchTelegramMembers = async (): Promise<number | null> => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '-1002792110571';
  
  if (!botToken || botToken === 'your_telegram_bot_token_here') {
    console.warn('Telegram Bot Token not configured');
    return null;
  }
  
  return getCachedOrFetch('telegram_members', async () => {
    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${botToken}/getChatMemberCount`,
        {
          params: { chat_id: chatId }
        }
      );
      
      return response.data.result || 0;
    } catch (error) {
      console.error('Error fetching Telegram members:', error);
      throw error;
    }
  });
};

// Fetch Solana token holder count using Solscan API with fallback to RPC
const fetchTokenHolders = async (): Promise<number | null> => {
  const tokenAddress = import.meta.env.VITE_SOLANA_TOKEN_ADDRESS;
  const rpcUrl = import.meta.env.VITE_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
  
  if (!tokenAddress || tokenAddress === 'YourTokenAddress') {
    console.warn('Solana Token Address not configured');
    return null;
  }
  
  return getCachedOrFetch('token_holders', async () => {
    try {
      try {
        const response = await axios.get(
          `https://api.solscan.io/token/holders?token=${tokenAddress}&limit=1`,
          {
            timeout: 10000,
          }
        );
        
        return response.data.total || 0;
      } catch (solscanError) {
        console.warn('Solscan API failed, trying RPC fallback:', solscanError);
        
        const connection = new Connection(rpcUrl);
        const tokenPublicKey = new PublicKey(tokenAddress);
        
        const tokenAccounts = await connection.getProgramAccounts(
          new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
          {
            filters: [
              {
                dataSize: 165,
              },
              {
                memcmp: {
                  offset: 0,
                  bytes: tokenPublicKey.toBase58(),
                },
              },
            ],
          }
        );
        
        let holdersCount = 0;
        for (const account of tokenAccounts) {
          const accountData = account.account.data;
          const amount = accountData.readBigUInt64LE(64);
          if (amount > 0n) {
            holdersCount++;
          }
        }
        
        return holdersCount;
      }
    } catch (error) {
      console.error('Error fetching token holders:', error);
      throw error;
    }
  });
};

// Main function to fetch all metrics
export const fetchAllMetrics = async () => {
  try {
    const [twitterFollowers, telegramMembers, tokenHolders] = await Promise.allSettled([
      fetchTwitterFollowers(),
      fetchTelegramMembers(),
      fetchTokenHolders(),
    ]);

    return {
      twitterFollowers: twitterFollowers.status === 'fulfilled' ? twitterFollowers.value : null,
      telegramMembers: telegramMembers.status === 'fulfilled' ? telegramMembers.value : null,
      tokenHolders: tokenHolders.status === 'fulfilled' ? tokenHolders.value : null,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};