import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-sky-400 bg-clip-text text-transparent">
        TrendSearch Solutions
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
        Discover the hottest trending topics and get actionable solutions to leverage them.
      </p>
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4 max-w-2xl mx-auto">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          📈 Real-time trending insights • 🎯 Actionable solutions • 📱 Updated daily
        </p>
      </div>
    </header>
  );
};

export default Header;