import React, { createContext, useContext, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Node {
  id: string;
  position: Position;
}

interface CanvasContextType {
  nodes: Node[];
  viewportPosition: Position;
  zoom: number;
  setViewportPosition: (position: Position) => void;
  setZoom: (zoom: number) => void;
  updateNodePosition: (id: string, position: Position) => void;
}

const CanvasContext = createContext<CanvasContextType | null>(null);

export function CanvasProvider({ children }: { children: React.ReactNode }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [viewportPosition, setViewportPosition] = useState<Position>({ x: 0.5, y: 0.5 });
  const [zoom, setZoom] = useState(1);

  const updateNodePosition = (id: string, position: Position) => {
    setNodes(prev => prev.map(node => 
      node.id === id ? { ...node, position } : node
    ));
  };

  return (
    <CanvasContext.Provider value={{
      nodes,
      viewportPosition,
      zoom,
      setViewportPosition,
      setZoom,
      updateNodePosition
    }}>
      {children}
    </CanvasContext.Provider>
  );
}

export function useCanvasContext() {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasContext must be used within a CanvasProvider');
  }
  return context;
}