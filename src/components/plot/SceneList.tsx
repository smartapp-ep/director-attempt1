import React from 'react';
import { GripVertical } from 'lucide-react';
import { Scene } from '../../types/plot';

interface SceneListProps {
  scenes: Scene[];
  selectedSceneId: string | undefined;
  onSceneClick: (scene: Scene) => void;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export default function SceneList({ scenes, selectedSceneId, onSceneClick, onReorder }: SceneListProps) {
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

  return (
    <div className="mt-6 space-y-2">
      {scenes.map((scene, index) => (
        <div
          key={scene.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={() => setDraggedItem(null)}
          className={`
            flex items-center gap-2 p-3 rounded-lg cursor-move
            ${selectedSceneId === scene.id ? 'bg-green-100' : 'bg-white'}
            hover:bg-green-50 border border-green-200
          `}
          onClick={() => onSceneClick(scene)}
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">{scene.title}</h3>
            <p className="text-sm text-gray-600">{scene.duration} min</p>
          </div>
        </div>
      ))}
    </div>
  );
}