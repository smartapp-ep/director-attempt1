import React from 'react';
import Node from '../../Node';

export default function IdeaNode() {
  return (
    <Node 
      title="Ideas" 
      color="bg-blue-50"
      borderColor="border-blue-200"
      description="Capture initial concepts, themes, and inspirations"
    >
      <div className="space-y-2">
        <div className="p-2 bg-white rounded border border-blue-100 shadow-sm">
          Theme: A heist in a futuristic city
        </div>
        <div className="p-2 bg-white rounded border border-blue-100 shadow-sm">
          Core conflict: Technology vs. Human intuition
        </div>
      </div>
    </Node>
  );
}