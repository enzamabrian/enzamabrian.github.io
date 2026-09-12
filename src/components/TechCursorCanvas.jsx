import React, { useEffect, useRef } from 'react';

const TechCursorCanvas = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track cursor position and movement vector
    const mouse = {
      x: width / 2,
      y: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      vx: 0,
      vy: 0,
      isHovered: false,
    };

    const trailParticles = [];

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Handle Mouse Motion
    const handleMouseMove = (e) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Calculate direction vectors (dx, dy)
      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Directional Particle Class
    class TrailParticle {
      constructor(x, y, moveVx, moveVy) {
        this.x = x;
        this.y = y;

        // Base velocity opposite to movement direction + slight scatter
        const speed = Math.hypot(moveVx, moveVy);
        const angle = Math.atan2(moveVy, moveVx) + (Math.random() - 0.5) * 0.8;
        const scatterSpeed = (Math.random() * 0.4 + 0.1) * Math.min(speed * 0.2, 3);

        // Drift backward along movement vector
        this.vx = -Math.cos(angle) * scatterSpeed + (Math.random() - 0.5) * 0.5;
        this.vy = -Math.sin(angle) * scatterSpeed + (Math.random() - 0.5) * 0.5;

        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.02; // Fade rate
        this.size = Math.random() * 3 + 1.5;
        this.isSquare = Math.random() > 0.5; // Tech shape variation
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size *= 0.96; // Shrink as it trails away
        this.life -= this.decay;
      }

      draw() {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(this.life, 0);

        // Gradient glow color scheme matching theme
        ctx.fillStyle = darkMode ? '#a855f7' : '#9333ea';

        if (this.isSquare) {
          ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.isHovered) {
        const speed = Math.hypot(mouse.vx, mouse.vy);

        // Spawn particles proportional to movement speed and direction
        if (speed > 0.5) {
          const spawnCount = Math.min(Math.floor(speed / 2.5) + 1, 5);
          for (let i = 0; i < spawnCount; i++) {
            if (trailParticles.length < 90) {
              trailParticles.push(new TrailParticle(mouse.x, mouse.y, mouse.vx, mouse.vy));
            }
          }
        }
      }

      // Update and draw existing particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.update();
        p.draw();

        // Optional connect line to adjacent trailing nodes for a digital web trail
        if (i > 0) {
          const prevP = trailParticles[i - 1];
          const dist = Math.hypot(p.x - prevP.x, p.y - prevP.y);

          if (dist < 30 && p.life > 0.3) {
            ctx.save();
            ctx.globalAlpha = p.life * 0.25;
            ctx.strokeStyle = darkMode ? '#6366f1' : '#4f46e5';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(prevP.x, prevP.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Remove dead particles
        if (p.life <= 0 || p.size <= 0.2) {
          trailParticles.splice(i, 1);
        }
      }

      // Decay mouse velocity when stationary
      mouse.vx *= 0.5;
      mouse.vy *= 0.5;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
    />
  );
};

export default TechCursorCanvas;