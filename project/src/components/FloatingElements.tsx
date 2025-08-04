import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating coins */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-20 flex items-center justify-center text-xs">
          💰
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-20 flex items-center justify-center text-xs">
          🚀
        </div>
      </div>
      <div className="absolute top-60 left-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
        <div className="w-7 h-7 bg-pink-400 rounded-full opacity-20 flex items-center justify-center text-xs">
          💎
        </div>
      </div>
      <div className="absolute bottom-40 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
        <div className="w-5 h-5 bg-green-400 rounded-full opacity-20 flex items-center justify-center text-xs">
          📈
        </div>
      </div>
      <div className="absolute bottom-60 left-16 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}>
        <div className="w-6 h-6 bg-blue-400 rounded-full opacity-20 flex items-center justify-center text-xs">
          🎯
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;