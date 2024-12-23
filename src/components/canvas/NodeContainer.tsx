import React, { ReactNode } from 'react';
import { useDnd } from './DndContext';

interface NodeContainerProps {
  id: string;
  children: ReactNode;
}

const NodeContainer: React.FC<NodeContainerProps> = ({ id, children }) => {
  console.log('NodeContainerProps:', { id, children });

  const context = useDnd(); // This should work if wrapped correctly
  console.log('useDnd called, context:', context); // Log context value

  return (
    <div>
      <h2>{id} Node Container</h2>
      {children}
    </div>
  );
};

export default NodeContainer;