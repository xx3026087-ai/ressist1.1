import React from 'react';
import { Button } from './ui/Button';

interface NoResultsProps {
  onReset: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onReset }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-8 max-w-md mx-auto">
        <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 className="mt-4 text-xl text-slate-800 dark:text-slate-200">No topics found</h3>
        <p className="text-slate-600 dark:text-slate-400 my-4">
          Try adjusting your search terms or selecting a different category.
        </p>
        <Button 
          variant="outline" 
          onClick={onReset}
        >
          ↻ Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default NoResults;