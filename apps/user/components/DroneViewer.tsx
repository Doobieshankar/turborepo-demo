"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function DroneModel() {
  const { scene } = useGLTF("/models/drone.glb"); // drop drone.glb into public/models
  return <primitive object={scene} scale={1.5} />;
}

export default function DroneViewer() {
  return (
    <section className="bg-black py-24 px-6" id="viewer">
      <div className="max-w-6xl mx-auto text-center text-white mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the Drone
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interactive 3D visualization of the tactical drone system. Rotate,
          zoom, and explore its design.
        </p>
      </div>

      <div className="h-[500px] rounded-xl overflow-hidden border border-gray-800">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} shadows adjustCamera>
              <DroneModel />
            </Stage>
          </Suspense>
          <OrbitControls enablePan enableZoom enableRotate />
        </Canvas>
      </div>
    </section>
  );
}
