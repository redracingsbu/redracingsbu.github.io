import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useGesture } from '@use-gesture/react';

function RotatableModel() {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMouse, setPreviousMouse] = useState([0, 0]);
  const rotationSpeed = useRef([0, 0]);  // For optional inertia
  const { camera, gl } = useThree();

  // Load the GLB model (use absolute path for Vite public folder)
  const { scene } = useGLTF('/RedBull_2022.glb');

  const bind = useGesture({
    onDragStart: ({ event }) => {
      setIsDragging(true);
      setPreviousMouse([event.clientX, event.clientY]);
      rotationSpeed.current = [0, 0];  // Reset inertia
    },
    onDrag: ({ event }) => {
      if (isDragging) {
        const [x, y] = [event.clientX, event.clientY];
        const deltaX = (x - previousMouse[0]) * 0.01;
        const deltaY = (y - previousMouse[1]) * 0.01;
        groupRef.current.rotation.y += deltaX;
        groupRef.current.rotation.x += deltaY;
        rotationSpeed.current = [deltaX, deltaY];  // Capture speed for inertia
        setPreviousMouse([x, y]);
      }
    },
    onDragEnd: () => setIsDragging(false),
  });

  useFrame(() => {
    if (!isDragging) {
      // Add inertia: gradually slow down rotation
      groupRef.current.rotation.y += rotationSpeed.current[0];
      groupRef.current.rotation.x += rotationSpeed.current[1];
      rotationSpeed.current[0] *= 0.95;
      rotationSpeed.current[1] *= 0.95;
    }
  });

  return (
    <group ref={groupRef} {...bind()} castShadow receiveShadow>
      <primitive object={scene} scale={1} />  // Adjust scale if needed
    </group>
  );
}

function Scene() {
  return (
    <Canvas shadows>
      <hemisphereLight intensity={1} skyColor="white" groundColor="gray" />  // Improved ambient for better contrast
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}  // Reduced from 10 to avoid overexposure
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <RotatableModel />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
