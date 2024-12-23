import React, { createContext, useContext, useState } from 'react';
import NodeContainer from './NodeContainer'; // Import NodeContainer

interface Position {
  x: number;
  y: number;
}

interface DndContextType {
  positions: Record<string, Position>;
  updatePosition: (id: string, position: Position) => void;
}

const DndContext = createContext<DndContextType | null>(null);

export function DndProvider({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<Record<string, Position>>({});

  const updatePosition = (id: string, position: Position) => {
    setPositions(prev => ({
      ...prev,
      [id]: position
    }));
  };

  const contextValue: DndContextType = { positions, updatePosition };
  console.log('DndProvider context value:', contextValue); // Log the context value

  return (
    <DndContext.Provider value={contextValue}>
      {children}
    </DndContext.Provider>
  );
}

export function useDnd() {
  const context = useContext(DndContext);
  if (!context) {
    throw new Error('useDnd must be used within a DndProvider');
  }
  return context;
}

export default function Canvas() {
  console.log('Canvas rendered'); // Debugging line
  return (
    <div>
      <h1>Canvas Component</h1> {/* Confirm rendering */}
      <NodeContainer id="ideas">
        <div>Idea Node Content</div> {/* Placeholder content */}
      </NodeContainer>
    </div>
  );
}