import React from 'react';
import { Scene } from '../../types/plot';

interface TimelineProps {
  scenes: Scene[];
  onSceneClick: (scene: Scene) => void;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export default function Timeline({ scenes, onSceneClick, onReorder }: TimelineProps) {
  const [draggedItem, setDraggedItem] = React.useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItem === null) return;
    
    if (draggedItem !== index) {
      onReorder(draggedItem, index);
      setDraggedItem(index);
    }
  };

  const totalDuration = scenes.reduce((sum, scene) => sum + scene.duration, 0);

  return (
    <div className="mt-4">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute h-1 bg-green-200 top-4 left-0 right-0 z-0" />
        
        {/* Scene markers */}
        <div className="relative z-10 flex justify-between">
          {scenes.map((scene, index) => {
            const position = (scene.duration / totalDuration) * 100;
            
            return (
              <div
                key={scene.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={() => setDraggedItem(null)}
                style={{ left: `${position}%` }}
                className="group relative flex flex-col items-center"
              >
                {/* Marker */}
                <button
                  onClick={() => onSceneClick(scene)}
                  className="w-8 h-8 rounded-full bg-white border-2 border-green-400 
                            hover:bg-green-100 transition-colors cursor-pointer
                            flex items-center justify-center"
                >
                  {index + 1}
                </button>
                
                {/* Title */}
                <div className="mt-2 text-sm font-medium text-gray-700 group-hover:text-gray-900
                              max-w-[120px] text-center">
                  {scene.title}
                </div>
                
                {/* Duration */}
                <div className="text-xs text-gray-500">
                  {scene.duration} min
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}