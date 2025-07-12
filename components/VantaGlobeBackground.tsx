"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

export default function VantaGlobeBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<object | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 监听窗口宽度变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!vantaRef.current) return;
    if (vantaEffect.current) {
      // 销毁旧的
      (vantaEffect.current as { destroy: () => void }).destroy();
      vantaEffect.current = null;
    }

    vantaEffect.current = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0, // 只控制整体缩放
      size: isMobile ? 0.7 : 1.0, // 响应式控制球体大小
      color2: 0x606c3,
      backgroundColor: 0xafd5ed,
      showDots: false,
    });

    return () => {
      if (vantaEffect.current && typeof (vantaEffect.current as { destroy?: () => void }).destroy === 'function') {
        (vantaEffect.current as { destroy: () => void }).destroy();
        vantaEffect.current = null;
      }
    };
  }, [isMobile]);

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