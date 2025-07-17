'use no memo';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function RotatableModel() {
  'use no memo';
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMouse, setPreviousMouse] = useState([0, 0]);
  const rotationSpeed = useRef([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const { gl } = useThree();

  const { scene } = useGLTF('/RedBull_2022.glb');

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse event handlers
  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setPreviousMouse([event.clientX, event.clientY]);
    rotationSpeed.current = [0, 0];
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    
    event.preventDefault();
    event.stopPropagation();
    const deltaX = (event.clientX - previousMouse[0]) * 0.01;
    const deltaY = (event.clientY - previousMouse[1]) * 0.01;
    
    if (groupRef.current) {
      groupRef.current.rotation.y += deltaX;
      groupRef.current.rotation.x += deltaY;
      rotationSpeed.current = [deltaX, deltaY];
    }
    setPreviousMouse([event.clientX, event.clientY]);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      setIsDragging(true);
      setPreviousMouse([touch.clientX, touch.clientY]);
      rotationSpeed.current = [0, 0];
    }
  };

  const handleTouchMove = (event) => {
    if (!isDragging || event.touches.length !== 1) return;
    
    event.preventDefault();
    event.stopPropagation();
    const touch = event.touches[0];
    const deltaX = (touch.clientX - previousMouse[0]) * 0.01;
    const deltaY = (touch.clientY - previousMouse[1]) * 0.01;
    
    if (groupRef.current) {
      groupRef.current.rotation.y += deltaX;
      groupRef.current.rotation.x += deltaY;
      rotationSpeed.current = [deltaX, deltaY];
    }
    setPreviousMouse([touch.clientX, touch.clientY]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add event listeners to the canvas
  useEffect(() => {
    const canvas = gl.domElement;
    
    // Mouse events
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Touch events
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, previousMouse, gl]);

  // Inertia animation
  useFrame(() => {
    if (!isDragging && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed.current[0];
      groupRef.current.rotation.x += rotationSpeed.current[1];
      rotationSpeed.current[0] *= 0.95;
      rotationSpeed.current[1] *= 0.95;
    }
  });

  // Different position and rotation based on device type
  const modelPosition = isMobile ? [0, -1.5, -0.4] : [1, 0, 0];
  const modelRotation = isMobile ? [0, Math.PI, 0] : [0, Math.PI / 2, 0];

  return (
    <group 
      ref={groupRef} 
      position={modelPosition}
      castShadow 
      receiveShadow
    >
      <primitive 
        object={scene} 
        scale={1} 
        rotation={modelRotation}
      />
    </group>
  );
}

function CarModel() {
  'use no memo';
  const [isMobile, setIsMobile] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  useEffect(() => {
    setCanvasKey(prev => prev + 1);
  }, []);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Different camera position for mobile
  const cameraPosition = isMobile ? [0, 8, 0] : [0, 5, 0];

  return (
    <div 
      className="fixed inset-0 z-10"
      style={{ 
        pointerEvents: 'none',
        mixBlendMode: 'normal'
      }}
    >
      <Canvas 
        key={canvasKey}
        shadows 
        className="w-full h-full"
        style={{ 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'auto',
          background: 'transparent'
        }}
        camera={{ position: cameraPosition, fov: 75 }}
        gl={{ alpha: true }}
      >
        {/* Large invisible plane behind camera for light reflection */}
        <mesh position={[0, 0, 15]} rotation={[0, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshLambertMaterial 
            color="white" 
            transparent={true}
            opacity={0}
            side={2}
          />
        </mesh>

        {/* Ambient light for overall illumination */}
        <hemisphereLight intensity={0.6} skyColor="white" groundColor="gray" />
        
        {/* Key light from front-right */}
        <directionalLight
          position={[5, 10, 8]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          target-position={[0, 0, 0]}
        />
        
        {/* Fill light from left side */}
        <directionalLight
          position={[-8, 5, 5]}
          intensity={0.8}
          castShadow={false}
        />
        
        {/* Rim light from behind */}
        <directionalLight
          position={[0, 8, -10]}
          intensity={0.6}
          castShadow={false}
        />
        
        <RotatableModel />
      </Canvas>
    </div>
  );
}

export default CarModel;
useGLTF.preload('/RedBull_2022.glb');