import React from 'react';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { useCanvasContext } from './CanvasContext';

export default function ZoomControls() {
  const { zoom, setZoom } = useCanvasContext();

  const handleZoomIn = () => setZoom(Math.min(zoom * 1.2, 2));
  const handleZoomOut = () => setZoom(Math.max(zoom / 1.2, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <div className="fixed bottom-4 left-4 flex gap-2">
      <button
        onClick={handleZoomIn}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      <button
        onClick={handleZoomOut}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5" />
      </button>
      <button
        onClick={handleReset}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
        title="Reset Zoom"
      >
        <Maximize className="w-5 h-5" />
      </button>
    </div>
  );
}