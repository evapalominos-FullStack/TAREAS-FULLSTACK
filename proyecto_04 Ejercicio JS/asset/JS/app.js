window.addEventListener('scroll', function() {
    if (window.scrollY > 200) { // Muestra si has bajado más de 200px
      document.body.classList.add('show-btn');
    } else {
      document.body.classList.remove('show-btn');
    }
  });
  

