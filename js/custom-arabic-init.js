// small init script: add RTL class to body so CSS applies
document.addEventListener('DOMContentLoaded', function () {
  if (!document.body.classList.contains('rtl')) {
    document.body.classList.add('rtl');
  }
});