import { useState, useEffect } from 'react';
import { fetchAllMetrics } from '../api/metrics';

interface MetricsData {
  twitterFollowers: number | null;
  telegramMembers: number | null;
  tokenHolders: number | null;
  lastUpdated: string;
}

export const useMetrics = () => {
  const [metrics, setMetrics] = useState<MetricsData>({
    twitterFollowers: null,
    telegramMembers: null,
    tokenHolders: null,
    lastUpdated: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await fetchAllMetrics();
      setMetrics(data);
    } catch (err) {
      console.error('Error fetching metrics:', err);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    
    // Refresh metrics every 5 minutes
    const interval = setInterval(fetchMetrics, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    metrics,
    loading,
    error,
    refetch: fetchMetrics
  };
};