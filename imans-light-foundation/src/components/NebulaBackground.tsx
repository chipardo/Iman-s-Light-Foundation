'use client';
import { useEffect, useRef } from 'react';

export default function NebulaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; baseAlpha: number }[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // Density of stars
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.1,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          baseAlpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle effect
        const alpha = star.baseAlpha + Math.sin(Date.now() * 0.001 + star.x) * 0.2;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Using brand gold colors for stars
        ctx.fillStyle = `rgba(201, 168, 76, ${Math.max(0.1, alpha)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'var(--navy)', // Fallback background
      overflow: 'hidden'
    }}>
      {/* Nebula glowing orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 105, 20, 0.15) 0%, transparent 60%)',
        filter: 'blur(60px)',
        borderRadius: '50%',
        animation: 'drift 20s infinite alternate ease-in-out'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 60%)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        animation: 'drift 25s infinite alternate-reverse ease-in-out'
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '60%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(24, 33, 61, 0.4) 0%, transparent 70%)',
        filter: 'blur(50px)',
        borderRadius: '50%',
      }} />

      {/* Star Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* CSS Animation required for drift */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(5%, 5%) scale(1.1); }
        }
      `}} />
    </div>
  );
}
