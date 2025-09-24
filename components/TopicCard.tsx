
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
    <Card className="flex flex-col bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={`https://picsum.photos/400/300?random=${topic.id}`}
          alt={`Visual representation of ${topic.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">{topic.title}</CardTitle>
          <span className="flex-shrink-0 px-2 py-1 text-xs bg-sky-500 text-white rounded-full capitalize">
            {topic.category}
          </span>
        </div>
        <CardDescription className="flex justify-between text-sm text-slate-500 dark:text-slate-400 pt-1">
          <span>Volume: {topic.searchVolume}</span>
          <span className="font-medium text-emerald-600 dark:text-emerald-400">{topic.growth}</span>
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
        
        <Button 
          variant="outline" 
          className="w-full mt-auto pt-4"
          onClick={onToggleExpand}
        >
          {isExpanded ? 'Show Less' : 'View Solution'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
