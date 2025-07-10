"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

export default function VantaGlobeBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<object | null>(null);

  useEffect(() => {
    console.log('Globe useEffect 触发');
    if (typeof window === "undefined") return;
    if (!vantaRef.current) return;
    if (vantaEffect.current) return;

    vantaEffect.current = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color2: 0x606c3,
      backgroundColor: 0xafd5ed,
    });

    return () => {
      if (vantaEffect.current && typeof (vantaEffect.current as { destroy?: () => void }).destroy === 'function') {
        (vantaEffect.current as { destroy: () => void }).destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
} 