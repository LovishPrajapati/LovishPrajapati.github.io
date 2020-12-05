 (function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.progress-hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        if(element.id=="skill-html"){
          element.classList.add('progress-bar2');
        }

        if(element.id=="skill-css"){
          element.classList.add('progress-bar3');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-js"){
          element.classList.add('progress-bar4');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-bootstrap"){
          element.classList.add('progress-bar5');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-jquery"){
          element.classList.add('progress-bar6');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-php"){
          element.classList.add('progress-bar7');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-mysql"){
          element.classList.add('progress-bar8');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-ps"){
          element.classList.add('progress-bar9');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-ai"){
          element.classList.add('progress-bar10');
          element.classList.remove('progress-hidden');
        }

        if(element.id=="skill-react"){
          element.classList.add('progress-bar11');
          element.classList.remove('progress-hidden');
        }
        
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
