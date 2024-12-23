import React from 'react';
import { BarChart3, Clock, FileText, Users } from 'lucide-react';
import ProgressRing from './ProgressRing';
import StatCard from './StatCard';
import { useCanvasContext } from '../CanvasContext';

export default function CanvasOverview() {
  const { nodes } = useCanvasContext();
  
  const stats = {
    scenes: 12,
    characters: 5,
    totalDuration: 120,
    completionRate: 65
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Story Overview</h2>
        <ProgressRing progress={stats.completionRate} size={48} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          icon={<FileText className="w-5 h-5" />}
          label="Scenes"
          value={stats.scenes}
          trend="+2 this week"
        />
        <StatCard 
          icon={<Users className="w-5 h-5" />}
          label="Characters"
          value={stats.characters}
          trend="All defined"
        />
        <StatCard 
          icon={<Clock className="w-5 h-5" />}
          label="Duration"
          value={`${stats.totalDuration}min`}
          trend="On target"
        />
        <StatCard 
          icon={<BarChart3 className="w-5 h-5" />}
          label="Progress"
          value={`${stats.completionRate}%`}
          trend="Ahead of schedule"
        />
      </div>
    </div>
  );
}