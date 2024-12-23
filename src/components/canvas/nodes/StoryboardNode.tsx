import React from 'react';
import Node from '../../Node';
import { Layout } from 'lucide-react';

export default function StoryboardNode() {
  return (
    <Node 
      title="Storyboard" 
      color="bg-amber-50"
      borderColor="border-amber-200"
      description="Visualize your scenes"
      icon={<Layout className="w-4 h-4" />}
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
          Scene 1
        </div>
        <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
          Scene 2
        </div>
      </div>
    </Node>
  );
}