export const followPointer = (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const element = event.currentTarget;
  const bounds = element.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const x = Math.max(0, Math.min(bounds.width, event.clientX - bounds.left));
  const y = Math.max(0, Math.min(bounds.height, event.clientY - bounds.top));
  element.style.setProperty("--glow-x", `${x}px`);
  element.style.setProperty("--glow-y", `${y}px`);
  element.style.setProperty("--tilt-x", `${(0.5 - y / bounds.height) * 4}deg`);
  element.style.setProperty("--tilt-y", `${(x / bounds.width - 0.5) * 4}deg`);
  element.dataset.pointerActive = "true";
};

export const releasePointer = (event) => {
  delete event.currentTarget.dataset.pointerActive;
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
};

export const pointerMotion = {
  onPointerMove: followPointer,
  onPointerDown: followPointer,
  onPointerLeave: releasePointer,
  onPointerCancel: releasePointer,
  onPointerUp: (event) => {
    if (event.pointerType !== "mouse") releasePointer(event);
  },
};
