import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  placeholder = "Search topics..."
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
      <div className="flex gap-2 flex-wrap justify-center">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onSelectCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="w-full md:w-auto relative">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
         </div>
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={onSearchChange}
          className="w-full md:w-72 pl-10"
        />
      </div>
    </div>
  );
};

export default FilterControls;