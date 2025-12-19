'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface SkillSphereProps {
  skill: string;
  position: [number, number, number];
  color: string;
}

export function SkillSphere({ skill, position, color }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Auto-rotate when not clicked
  useFrame((state, delta) => {
    if (meshRef.current && !clicked) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2, 2]}
        radius={0.2}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color={hovered ? '#4a9eff' : color}
          metalness={0.6}
          roughness={0.2}
          emissive={hovered ? '#2a5eff' : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </RoundedBox>
      
      {/* Skill name text */}
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill}
      </Text>
      
      {/* Back text */}
      <Text
        position={[0, 0, -1.1]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill}
      </Text>
    </group>
  );
}
