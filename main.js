// Small enhancements: year and mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  // Fill year on index
  var y = new Date().getFullYear();
  var el = document.getElementById('year'); if(el) el.textContent = y;

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        mainNav.style.display = 'block';
      } else {
        mainNav.style.display = '';
      }
    });
  }
});
