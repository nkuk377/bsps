  document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.querySelector('a[href="#take-action"]');
    const target = document.getElementById('take-action');
    const backToTop = document.getElementById('back-to-top');

    // Scroll to #take-action
    if (trigger && target) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // Show/hide back to top button
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    // Scroll to top smoothly
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
