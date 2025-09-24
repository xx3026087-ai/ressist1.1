import React from 'react';
import { TrendingTopic } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

interface TopicCardProps {
  topic: TrendingTopic;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isExpanded, onToggleExpand }) => {
  return (
    <Card className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="h-48 overflow-hidden relative">
        <img
          src={`https://placeholder-image-service.onrender.com/image/400x300?prompt=${encodeURIComponent(`Modern digital illustration representing ${topic.title} trend with abstract elements and vibrant colors`)}&id=${topic.id}`}
          alt={`Visual representation of ${topic.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">🔥 Trending</span>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">{topic.title}</CardTitle>
          <span className="flex-shrink-0 px-2 py-1 text-xs bg-sky-500 text-white rounded-full capitalize">
            {topic.category}
          </span>
        </div>
        <CardDescription className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 pt-2">
          <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs">
            📊 Volume: {topic.searchVolume}
          </span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            📈 {topic.growth}
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col">
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm flex-grow">
          {topic.description}
        </p>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Solution Approach:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{topic.solution}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Resources:</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                {topic.resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="pt-4 mt-auto">
            <Button 
              variant={isExpanded ? "secondary" : "default"}
              className="w-full transition-all duration-200"
              onClick={onToggleExpand}
            >
              {isExpanded ? '👇 Show Less' : '🚀 View Solution'}
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard;