import React from 'react';
import { Move } from 'lucide-react';
import Node from './Node';
import PlotNode from './plot/PlotNode';

export default function Canvas() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Move className="w-6 h-6" />
          Story Canvas
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <PlotNode />

        <Node 
          title="Script" 
          color="bg-purple-50"
          borderColor="border-purple-200"
          description="Write and edit your screenplay"
        >
          <div className="p-2 bg-white rounded border border-purple-100 shadow-sm font-mono text-sm">
            <p className="text-gray-600">INT. CYBER CAFE - NIGHT</p>
            <p className="mt-2">The neon lights flicker as ALEX (30s) types furiously on a holographic keyboard.</p>
          </div>
        </Node>

        <Node 
          title="Storyboard" 
          color="bg-amber-50"
          borderColor="border-amber-200"
          description="Visualize your scenes"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
              Scene 1
            </div>
            <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
              Scene 2
            </div>
            <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
              Scene 3
            </div>
            <div className="aspect-video bg-white rounded border border-amber-100 shadow-sm flex items-center justify-center text-amber-400">
              Scene 4
            </div>
          </div>
        </Node>
      </div>
    </div>
  );
}