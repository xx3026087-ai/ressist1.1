
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        TrendSearch Solutions
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
        Discover the hottest trending topics and get actionable solutions to leverage them.
      </p>
    </header>
  );
};

export default Header;
