import React, { useEffect, useRef } from 'react';

export const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 210; // Start with a deep blue
    let direction = 1;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createGradient = (hue: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsla(${hue}, 100%, 20%, 0.8)`);
      gradient.addColorStop(0.5, `hsla(${hue + 20}, 80%, 35%, 0.8)`);
      gradient.addColorStop(1, `hsla(${hue + 40}, 95%, 30%, 0.8)`);
      return gradient;
    };

    const animate = () => {
      // Update hue
      hue += 0.2 * direction;
      
      // Reverse direction when reaching limits
      if (hue >= 260 || hue <= 210) {
        direction *= -1;
      }

      // Create and apply gradient
      const gradient = createGradient(hue);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    />
  );
};