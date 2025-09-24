
import React, { useState, useMemo } from 'react';
import { TrendingTopic } from './types';
import { trendingTopics } from './constants';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import TopicCard from './components/TopicCard';
import NoResults from './components/NoResults';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const categories = useMemo(() => ['all', ...Array.from(new Set(trendingTopics.map(topic => topic.category)))], []);

  const filteredTopics = useMemo(() => {
    return trendingTopics.filter(topic => {
      const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           topic.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedTopic(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        <FilterControls
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />

        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map(topic => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isExpanded={expandedTopic === topic.id}
                onToggleExpand={() => toggleExpand(topic.id)}
              />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
};

export default App;
