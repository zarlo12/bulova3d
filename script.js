// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

// Vercel Analytics - Track custom events
document.addEventListener('DOMContentLoaded', function() {
  // Track CTA button clicks
  const ctaButton = document.querySelector('.cta-button-descubrir');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      if (window.va) {
        window.va('track', 'CTA Button Click', { button: 'Descubrir más' });
      }
    });
  }

  // Track AR button clicks
  const arButton = document.querySelector('#ar-button');
  if (arButton) {
    arButton.addEventListener('click', function() {
      if (window.va) {
        window.va('track', 'AR Button Click', { button: 'View in your space' });
      }
    });
  }

  // Track model viewer interactions
  const modelViewer = document.querySelector('model-viewer');
  if (modelViewer) {
    modelViewer.addEventListener('camera-change', function() {
      if (window.va) {
        window.va('track', 'Model Interaction', { action: 'camera-change' });
      }
    });
  }
});
