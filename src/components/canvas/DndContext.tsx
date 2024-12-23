import React, { createContext, useContext, useState } from 'react';

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

  return (
    <DndContext.Provider value={{ positions, updatePosition }}>
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