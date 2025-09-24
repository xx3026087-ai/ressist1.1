
import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
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
      
      <div className="w-full md:w-auto">
        <Input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={onSearchChange}
          className="w-full md:w-64"
        />
      </div>
    </div>
  );
};

export default FilterControls;
