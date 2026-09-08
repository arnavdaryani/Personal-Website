import { useEffect, useRef } from "react";

export const InteractiveField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1, height = 1, frame = 0, lastTime = 0, time = 0;
    let visible = true;
    const pointer = { x: -1000, y: -1000, active: false };
    let ripples = [];

    const draw = (now) => {
      frame = 0;
      const delta = lastTime ? Math.min((now - lastTime) / 1000, .04) : 0;
      lastTime = now;
      if (!preference.matches) time += delta;
      ctx.clearRect(0, 0, width, height);
      const columns = width < 650 ? 38 : 64;
      const rows = width < 650 ? 19 : 27;
      ripples = ripples.filter(ripple => time - ripple.started < 2);
      for (let row = 0; row < rows; row++) {
        const depth = row / (rows - 1);
        const points = [];
        for (let col = 0; col < columns; col++) {
          const u = col / (columns - 1);
          let x = u * (width + 160) - 80;
          let y = height * (.48 + depth * .47);
          y += Math.sin(u * 9 + time * 1.15 + depth * 4) * (28 + depth * 62);
          y += Math.cos(u * 5 - time * .8 + depth * 7) * 22;
          if (pointer.active && !preference.matches) {
            const dx = x - pointer.x, dy = y - pointer.y;
            const distance = Math.hypot(dx, dy);
            const force = Math.exp(-distance * distance / 42000);
            x += dx * force * .45;
            y += dy * force * .45 - force * 65;
          }
          for (const ripple of ripples) {
            const age = time - ripple.started;
            const distance = Math.hypot(x - ripple.x, y - ripple.y);
            y += Math.sin(distance * .035 - age * 12) * Math.exp(-Math.pow((distance - age * 260) / 100, 2)) * 44 * (1 - age / 2);
          }
          points.push({ x, y });
        }
        ctx.beginPath();
        points.forEach(({ x, y }, index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
        ctx.strokeStyle = `rgba(85, ${140 + Math.round(depth * 55)}, 255, ${.12 + depth * .15})`;
        ctx.lineWidth = .8;
        ctx.stroke();
        points.forEach(({ x, y }, col) => {
          const sparkle = .5 + .5 * Math.sin(col * .8 + row * .6 - time * 2.8);
          ctx.beginPath();
          ctx.arc(x, y, .7 + depth + sparkle * .7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${130 + Math.round(sparkle * 90)}, 210, 255, ${.25 + sparkle * .65})`;
          ctx.fill();
        });
      }
      if (visible && !document.hidden && !preference.matches) frame = requestAnimationFrame(draw);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      start();
    };
    const move = (event) => {
      const bounds = host.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };
    const leave = () => { pointer.active = false; };
    const press = (event) => {
      if (preference.matches || event.target.closest("a, button")) return;
      move(event);
      ripples.push({ x: pointer.x, y: pointer.y, started: time });
      ripples = ripples.slice(-5);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); });
    intersection.observe(host);
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerdown", press, { passive: true });
    host.addEventListener("pointerleave", leave);
    host.addEventListener("pointerup", leave);
    document.addEventListener("visibilitychange", start);
    preference.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerdown", press);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("pointerup", leave);
      document.removeEventListener("visibilitychange", start);
      preference.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-field" aria-hidden="true" />;
};
