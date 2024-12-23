import React from 'react';
import { useCanvasContext } from './CanvasContext';

export default function Minimap() {
  const { nodes, viewportPosition, setViewportPosition } = useCanvasContext();
  const minimapRef = React.useRef<HTMLDivElement>(null);

  const handleMinimapClick = (e: React.MouseEvent) => {
    if (!minimapRef.current) return;
    
    const rect = minimapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setViewportPosition({ x, y });
  };

  return (
    <div 
      ref={minimapRef}
      className="fixed bottom-4 right-4 w-48 h-32 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-2"
      onClick={handleMinimapClick}
    >
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{
            left: `${node.position.x * 100}%`,
            top: `${node.position.y * 100}%`
          }}
        />
      ))}
      <div 
        className="absolute border-2 border-blue-500 rounded"
        style={{
          left: `${viewportPosition.x * 100}%`,
          top: `${viewportPosition.y * 100}%`,
          width: '30%',
          height: '30%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
}