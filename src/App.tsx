import React from 'react';
import { DndProvider } from './components/canvas/DndContext';
import Canvas from './components/canvas/Canvas';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  console.log('App rendered');
  return (
    <ErrorBoundary>
      <DndProvider>
        <Canvas />
      </DndProvider>
    </ErrorBoundary>
  );
}

export default App;