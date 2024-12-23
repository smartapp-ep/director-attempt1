import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { Scene } from '../../types/plot';

interface SceneDetailsProps {
  scene: Scene;
  onUpdate: (scene: Scene) => void;
  onDelete: (sceneId: string) => void;
  onClose: () => void;
}

export default function SceneDetails({ scene, onUpdate, onDelete, onClose }: SceneDetailsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    onUpdate({
      ...scene,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      duration: Number(formData.get('duration')),
    });
  };

  return (
    <div className="mt-6 bg-white rounded-lg p-4 border border-green-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Scene Details</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => onDelete(scene.id)}
            className="text-red-500 hover:text-red-700 p-1"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={scene.title}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={scene.description}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            defaultValue={scene.duration}
            min="1"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}