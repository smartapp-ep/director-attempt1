import React from 'react';
import NodeContainer from './NodeContainer'; // Import NodeContainer
import IdeaNode from './nodes/IdeaNode'; // Import your actual node component

export default function Canvas() {
  console.log('Canvas rendered'); // Debugging line
  return (
    <div>
      <h1>Canvas Component</h1> {/* Confirm rendering */}
      <NodeContainer id="ideas">
        <IdeaNode /> {/* Replace static content with your actual component */}
      </NodeContainer>
    </div>
  );
}