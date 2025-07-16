import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function RotatableModel() {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMouse, setPreviousMouse] = useState([0, 0]);
  const rotationSpeed = useRef([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const { gl } = useThree();

  const { scene } = useGLTF('/RedBull_2022.glb');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setPreviousMouse([event.clientX, event.clientY]);
    rotationSpeed.current = [0, 0];
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    
    event.preventDefault();
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

  const handleTouchStart = (event) => {
    event.preventDefault();
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

  useEffect(() => {
    const canvas = gl.domElement;
    
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
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

  useFrame(() => {
    if (!isDragging && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed.current[0];
      groupRef.current.rotation.x += rotationSpeed.current[1];
      rotationSpeed.current[0] *= 0.95;
      rotationSpeed.current[1] *= 0.95;
    }
  });

  const modelPosition = isMobile ? [0, 0, 0.75] : [1, 0, 0];
  const modelRotation = isMobile ? [0, 0, 0] : [0, Math.PI / 2, 0];

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cameraPosition = isMobile ? [0, 8, 0] : [0, 5, 0];

  return (
    <div className="w-full h-full pointer-events-auto">
      <Canvas 
        shadows 
        className="w-full h-full"
        style={{ 
          width: '100%', 
          height: '100%', 
          touchAction: 'none',
          userSelect: 'none'
        }}
        camera={{ position: cameraPosition, fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <hemisphereLight intensity={0.6} skyColor="white" groundColor="gray" />
        
        <directionalLight
          position={[5, 10, 8]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          target-position={[0, 0, 0]}
        />
        
        <directionalLight
          position={[-8, 5, 5]}
          intensity={0.8}
          castShadow={false}
        />
        
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