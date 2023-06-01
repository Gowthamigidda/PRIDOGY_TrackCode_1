window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navigation');
    if (window.pageYOffset > 0) {
      navigation.classList.add('scrolled');
    } else {
      navigation.classList.remove('scrolled');
    }
  });