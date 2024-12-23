import React from 'react';
import { Plus } from 'lucide-react';
import Timeline from './Timeline';
import SceneDetails from './SceneDetails';
import SceneList from './SceneList';
import { Scene } from '../../types/plot';
import { generateId } from '../../utils/ids';

const initialScenes: Scene[] = [
  { id: '1', title: 'Team Assembly', description: 'Recruiting the tech specialists', duration: 15, order: 0 },
  { id: '2', title: 'Planning Phase', description: 'Analyzing security systems', duration: 20, order: 1 },
  { id: '3', title: 'Heist Preparation', description: 'Equipment gathering and rehearsal', duration: 25, order: 2 },
  { id: '4', title: 'The Execution', description: 'Main heist sequence', duration: 30, order: 3 },
];

export default function PlotNode() {
  const [selectedScene, setSelectedScene] = React.useState<Scene | null>(null);
  const [scenes, setScenes] = React.useState<Scene[]>(initialScenes);

  const handleSceneClick = (scene: Scene) => {
    setSelectedScene(scene);
  };

  const handleSceneUpdate = (updatedScene: Scene) => {
    setScenes(scenes.map(scene => 
      scene.id === updatedScene.id ? updatedScene : scene
    ));
  };

  const handleAddScene = () => {
    const newScene: Scene = {
      id: generateId(),
      title: 'New Scene',
      description: 'Add description...',
      duration: 15,
      order: scenes.length
    };
    setScenes([...scenes, newScene]);
    setSelectedScene(newScene);
  };

  const handleDeleteScene = (sceneId: string) => {
    setScenes(prevScenes => {
      const updatedScenes = prevScenes
        .filter(scene => scene.id !== sceneId)
        .map((scene, index) => ({
          ...scene,
          order: index
        }));
      return updatedScenes;
    });
    if (selectedScene?.id === sceneId) {
      setSelectedScene(null);
    }
  };

  const handleReorderScenes = (startIndex: number, endIndex: number) => {
    setScenes(prevScenes => {
      const result = Array.from(prevScenes);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result.map((scene, index) => ({
        ...scene,
        order: index
      }));
    });
  };

  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Plot Timeline</h2>
        <button
          onClick={handleAddScene}
          className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
        >
          <Plus className="w-4 h-4" />
          Add Scene
        </button>
      </div>

      <Timeline 
        scenes={scenes} 
        onSceneClick={handleSceneClick}
        onReorder={handleReorderScenes}
      />

      <SceneList 
        scenes={scenes}
        selectedSceneId={selectedScene?.id}
        onSceneClick={handleSceneClick}
        onReorder={handleReorderScenes}
      />

      {selectedScene && (
        <SceneDetails 
          scene={selectedScene} 
          onUpdate={handleSceneUpdate}
          onDelete={handleDeleteScene}
          onClose={() => setSelectedScene(null)}
        />
      )}
    </div>
  );
}