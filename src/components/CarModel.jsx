import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Custom hook for device detection
const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
    };
    
    checkScreenSize();
    const debouncedResize = debounce(checkScreenSize, 150);
    window.addEventListener('resize', debouncedResize);
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  return { isMobile, screenWidth };
};

// Debounce utility
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Custom hook for drag interactions
const useDragInteraction = (groupRef, isDragging, setIsDragging, setPreviousMouse, rotationSpeed) => {
  const handleStart = useCallback((clientX, clientY) => {
    setIsDragging(true);
    setPreviousMouse([clientX, clientY]);
    rotationSpeed.current = [0, 0];
  }, [setIsDragging, setPreviousMouse, rotationSpeed]);

  const handleMove = useCallback((clientX, clientY, previousMouse) => {
    if (!isDragging) return;
    
    const deltaX = (clientX - previousMouse[0]) * 0.01;
    const deltaY = (clientY - previousMouse[1]) * 0.01;
    
    if (groupRef.current) {
      groupRef.current.rotation.y += deltaX;
      groupRef.current.rotation.x += deltaY;
      rotationSpeed.current = [deltaX, deltaY];
    }
    setPreviousMouse([clientX, clientY]);
  }, [isDragging, groupRef, setPreviousMouse, rotationSpeed]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  return { handleStart, handleMove, handleEnd };
};

function RotatableModel() {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMouse, setPreviousMouse] = useState([0, 0]);
  const rotationSpeed = useRef([0, 0]);
  const { isMobile } = useDeviceDetection();
  const { gl } = useThree();

  const { scene } = useGLTF('/RedBull_2022.glb', true);
  const { handleStart, handleMove, handleEnd } = useDragInteraction(
    groupRef, isDragging, setIsDragging, setPreviousMouse, rotationSpeed
  );

  // Memoize model positioning
  const modelProps = useMemo(() => ({
    position: isMobile ? [0, -1.5, -0.4] : [1, 0, 0],
    rotation: isMobile ? [0, Math.PI, 0] : [0, Math.PI / 2, 0]
  }), [isMobile]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          if (child.material.map) child.material.map.dispose();
          child.material?.dispose();
        }
      });
    };
  }, [scene]);

  // Event handlers
  const handleMouseDown = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    handleStart(event.clientX, event.clientY);
  }, [handleStart]);

  const handleMouseMove = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    handleMove(event.clientX, event.clientY, previousMouse);
  }, [handleMove, previousMouse]);

  const handleTouchStart = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      handleStart(touch.clientX, touch.clientY);
    }
  }, [handleStart]);

  const handleTouchMove = useCallback((event) => {
    if (!isDragging || event.touches.length !== 1) return;
    event.preventDefault();
    event.stopPropagation();
    const touch = event.touches[0];
    handleMove(touch.clientX, touch.clientY, previousMouse);
  }, [isDragging, handleMove, previousMouse]);

  // Event listeners setup
  useEffect(() => {
    const canvas = gl.domElement;
    
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleEnd);
    
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleEnd);
    };
  }, [gl, handleMouseDown, handleMouseMove, handleEnd, handleTouchStart, handleTouchMove]);

  // Inertia animation with performance optimization
  useFrame(() => {
    if (!isDragging && groupRef.current) {
      const [speedX, speedY] = rotationSpeed.current;
      if (Math.abs(speedX) > 0.001 || Math.abs(speedY) > 0.001) {
        groupRef.current.rotation.y += speedX;
        groupRef.current.rotation.x += speedY;
        rotationSpeed.current = [speedX * 0.95, speedY * 0.95];
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={modelProps.position}
      castShadow 
      receiveShadow
    >
      <primitive 
        object={scene} 
        scale={1} 
        rotation={modelProps.rotation}
      />
    </group>
  );
}

// Optimized lighting setup
const LightingRig = () => (
  <>
    <ambientLight intensity={0.7} color="#ffffff" />
    <directionalLight
      position={[10, 15, 10]}
      intensity={2.5}
      color="#ffffff"
      castShadow
      shadow-mapSize={[2048, 2048]}
      shadow-camera-far={50}
      shadow-camera-left={-20}
      shadow-camera-right={20}
      shadow-camera-top={20}
      shadow-camera-bottom={-20}
    />
    <directionalLight
      position={[15, 8, -15]}
      intensity={1.4}
      color="#ffffff"
    />
    <directionalLight
      position={[-12, 6, 8]}
      intensity={1.2}
      color="#f0f0f0"
    />
    <directionalLight
      position={[0, 20, 5]}
      intensity={1.0}
      color="#ffffff"
    />
    <directionalLight
      position={[0, -5, -10]}
      intensity={0.8}
      color="#e8e8e8"
    />
  </>
);

function CarModel() {
  const { isMobile, screenWidth } = useDeviceDetection();
  
  // Memoize camera position calculation
  const cameraSettings = useMemo(() => {
    if (isMobile) return { position: [0, 8, 0], fov: 80 };
    if (screenWidth <= 1366) return { position: [0, 7, 0], fov: 80 };
    if (screenWidth <= 1600) return { position: [0, 5, 0], fov: 90 };
    if (screenWidth <= 2000) return { position: [0, 6, 0], fov: 80 };
    if (screenWidth <= 3000) return { position: [0, 4.5, 0], fov: 90 };
    return { position: [0, 4, 0], fov: 80 };
  }, [isMobile, screenWidth]);

  return (
    <div 
      className="fixed inset-0 z-10"
      style={{ 
        pointerEvents: 'none',
        mixBlendMode: 'normal'
      }}
    >
        <Canvas 
          shadows 
          className="w-full h-full"
          style={{ 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'auto',
            background: 'transparent'
          }}
          camera={cameraSettings}
          gl={{ alpha: true, antialias: true }}
          performance={{ min: 0.5 }}
        >
        <LightingRig />
        <RotatableModel />
      </Canvas>
    </div>
  );
}

export default CarModel;

// Preload the model
useGLTF.preload('/RedBull_2022.glb');