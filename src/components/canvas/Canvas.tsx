import React from 'react';
import { Move } from 'lucide-react';
import { CanvasProvider } from './CanvasContext';
import NodeContainer from './NodeContainer';
import Minimap from './Minimap';
import ZoomControls from './ZoomControls';
import CanvasOverview from './overview/CanvasOverview';
import PlotNode from '../plot/PlotNode';
import IdeaNode from './nodes/IdeaNode';
import CharacterNode from './nodes/CharacterNode';
import StoryboardNode from './nodes/StoryboardNode';

export default function Canvas() {
  return (
    <CanvasProvider>
      <div className="min-h-screen bg-slate-50 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Move className="w-6 h-6" />
            Story Canvas
          </h1>
        </header>

        <CanvasOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NodeContainer id="ideas">
            <IdeaNode />
          </NodeContainer>

          <NodeContainer id="plot">
            <PlotNode />
          </NodeContainer>

          <NodeContainer id="characters">
            <CharacterNode />
          </NodeContainer>

          <NodeContainer id="storyboard">
            <StoryboardNode />
          </NodeContainer>
        </div>

        <Minimap />
        <ZoomControls />
      </div>
    </CanvasProvider>
  );
}