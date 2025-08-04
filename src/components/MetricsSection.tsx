import React from 'react';
import { TrendingUp, Users, Coins, RefreshCw } from 'lucide-react';
import { useMetrics } from '../hooks/useMetrics';
import AnimatedCounter from './AnimatedCounter';

const MetricsSection: React.FC = () => {
  const { metrics, loading, error, refetch } = useMetrics();

  const formatNumber = (num: number | null): string => {
    if (num === null) return '---';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-yellow-200">
      <div className="flex items-center justify-center gap-3 mb-8">
        <TrendingUp className="w-8 h-8 text-purple-600" />
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700" style={{ fontFamily: 'Fredoka One, cursive' }}>
          Live Metrics
        </h3>
        <button
          onClick={refetch}
          disabled={loading}
          className="ml-4 p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200 disabled:opacity-50"
          title="Refresh metrics"
        >
          <RefreshCw className={`w-5 h-5 text-purple-600 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-600 font-medium">{error}</p>
          <p className="text-red-500 text-sm mt-1">
            Please check your API configuration and try again.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Twitter Followers */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 rounded-full p-3">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
            X Followers
          </h3>
          <div className="text-3xl font-bold text-blue-800 text-center mb-2">
            {loading ? (
              <div className="animate-pulse bg-blue-200 h-8 rounded"></div>
            ) : (
              <AnimatedCounter end={metrics.twitterFollowers || 0} />
            )}
          </div>
          <p className="text-blue-600 text-sm text-center">@RuggedRatsToken</p>
        </div>

        {/* Telegram Members */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-cyan-500 rounded-full p-3">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-cyan-700 mb-2 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Telegram Members
          </h3>
          <div className="text-3xl font-bold text-cyan-800 text-center mb-2">
            {loading ? (
              <div className="animate-pulse bg-cyan-200 h-8 rounded"></div>
            ) : (
              <AnimatedCounter end={metrics.telegramMembers || 0} />
            )}
          </div>
          <p className="text-cyan-600 text-sm text-center">Rugged Rats 👶</p>
        </div>

        {/* Token Holders */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-500 rounded-full p-3">
              <Coins className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-purple-700 mb-2 text-center" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Token Holders
          </h3>
          <div className="text-3xl font-bold text-purple-800 text-center mb-2">
            {loading ? (
              <div className="animate-pulse bg-purple-200 h-8 rounded"></div>
            ) : (
              <AnimatedCounter end={metrics.tokenHolders || 0} />
            )}
          </div>
          <p className="text-purple-600 text-sm text-center">On Solana</p>
        </div>
      </div>

      {metrics.lastUpdated && (
        <p className="text-gray-500 text-sm text-center mt-6">
          Last updated: {new Date(metrics.lastUpdated).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default MetricsSection;