const hotspots = document.querySelectorAll('.hotspot');

hotspots.forEach(h => {
  const x = h.dataset.x;
  const y = h.dataset.y;

  // CSS 변수로 좌표 전달
  h.style.setProperty('--x', x);
  h.style.setProperty('--y', y);

  const img = h.querySelector('img');

  window.addEventListener('mousemove', e => {
    const rect = h.getBoundingClientRect();
    const hx = rect.left + rect.width / 2;
    const hy = rect.top + rect.height / 2;

    const dx = e.clientX - hx;
    const dy = e.clientY - hy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 200;   // 반응 범위(px)
    const scale = Math.max(1, 1.4 - dist / maxDist);

    img.style.transform = `scale(${scale})`;
  });
});
