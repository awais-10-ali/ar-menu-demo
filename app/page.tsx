"use client";

import { useEffect } from 'react';

export default function Home() {
  // We dynamically import the model-viewer strictly on the client-side
  // because it needs access to the browser window and camera
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Chocolate Cupcake</h1>
      <p className="text-gray-500 mb-8">$4.99 - Tap below to see it on your table</p>

      {/* The AR Container */}
      <div className="w-full max-w-md h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100">

        {/* @ts-ignore - Ignoring TypeScript error for custom web components */}
        <model-viewer
          src="/models/cupcake.glb"
          ios-src="/models/cupcake.usdz"
          alt="A 3D model of a cupcake"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Custom AR Button */}
          <button
            slot="ar-button"
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
          >
            📸 View on your table
          </button>
          {/* @ts-ignore */}
        </model-viewer>

      </div>
    </main>
  );
}