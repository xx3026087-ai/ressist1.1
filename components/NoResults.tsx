
import React from 'react';

const NoResults: React.FC = () => {
  return (
    <div className="text-center py-16">
      <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 className="mt-2 text-lg font-medium text-slate-900 dark:text-white">No topics found</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Try adjusting your search or filter settings.</p>
    </div>
  );
};

export default NoResults;
