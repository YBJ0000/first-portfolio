"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import VantaGlobeBackground from "./VantaGlobeBackground";
import VantaHaloBackground from "./VantaHaloBackground";

export default function VantaBackgroundSwitcher() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 只在客户端渲染

  if (resolvedTheme === "dark") {
    console.log("渲染 Halo");
    return <VantaHaloBackground />;
  }
  if (resolvedTheme === "light") {
    console.log("渲染 Globe");
    return <VantaGlobeBackground />;
  }
  console.log("未渲染任何动效");
  return null;
}