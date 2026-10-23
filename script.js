// Squash the headline to corgi height, then pull up the gap the transform leaves.
(function () {
  var SQUASH = 0.72;
  function fit() {
    document.querySelectorAll('.squat').forEach(function (el) {
      el.style.marginBottom = -(el.offsetHeight * (1 - SQUASH)) + 'px';
    });
  }
  fit();
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
