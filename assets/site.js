// Keep research videos looping while visible, respecting reduced-motion preferences.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const videos = [...document.querySelectorAll('.animated-teaser video')];
const visible = new Set();
function updateVideo(video) {
  if (visible.has(video) && !document.hidden && !reducedMotion.matches) {
    video.play().catch(() => {});
  } else {
    video.pause();
  }
}
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) visible.add(entry.target);
    else visible.delete(entry.target);
    updateVideo(entry.target);
  }
}, { threshold: 0.2 });
for (const video of videos) {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  observer.observe(video);
}
const updateAll = () => videos.forEach(updateVideo);
reducedMotion.addEventListener('change', updateAll);
document.addEventListener('visibilitychange', updateAll);
