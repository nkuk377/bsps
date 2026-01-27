document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('langToggle');
    const menu = document.getElementById('langMenu');

    toggleBtn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });

    // Optional: Hide menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  });
