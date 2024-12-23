import React, { useRef } from 'react';
import { useDnd } from './DndContext';

interface NodeContainerProps {
  id: string;
  children: React.ReactNode;
}

export default function NodeContainer({ id, children }: NodeContainerProps) {
  const { updatePosition } = useDnd();
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    if (nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      e.dataTransfer.setData('text/plain', id);
      e.dataTransfer.setData('offset-x', String(e.clientX - rect.left));
      e.dataTransfer.setData('offset-y', String(e.clientY - rect.top));
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={nodeRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`
        relative rounded-lg shadow-lg transition-shadow
        ${isDragging ? 'opacity-50' : 'opacity-100'}
      `}
    >
      {children}
    </div>
  );
}