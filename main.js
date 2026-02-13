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

  // Hero CTA button navigates to contact page
  var cta = document.getElementById('ctaButton');
  if(cta){
    cta.addEventListener('click', function(){
      window.location.href = 'contact.html';
    });
  }

  // Since timer: reads `data-since` (ISO) from #sinceTimer and updates every second
  function formatSpan(ms){
    var s = Math.floor(Math.abs(ms) / 1000);
    var days = Math.floor(s / 86400); s -= days * 86400;
    var hours = Math.floor(s / 3600); s -= hours * 3600;
    var mins = Math.floor(s / 60); s -= mins * 60;
    var secs = s;
    return days + 'd ' + hours + 'h ' + mins + 'm ' + secs + 's';
  }

  // Timer for marriage
  var sinceEl = document.getElementById('sinceTimer');
  if(sinceEl){
    var sinceAttr = sinceEl.getAttribute('data-since');
    var sinceDate = sinceAttr ? new Date(sinceAttr) : null;
    function updateSince(){
      var now = new Date();
      if(!sinceDate || isNaN(sinceDate.getTime())){
        sinceEl.textContent = 'Invalid date — edit the data-since attribute';
        return;
      }
      var diff = now - sinceDate;
      if(diff >= 0){
        sinceEl.textContent = 'Marriage clock: ' + formatSpan(diff) + ' (since ' + sinceDate.toDateString() + ')';
      } else {
        sinceEl.textContent = 'Time until: ' + formatSpan(diff) + ' (until ' + sinceDate.toDateString() + ')';
      }
    }
    updateSince();
    setInterval(updateSince, 1000);
  }

  // Timer for "us"
  var sinceUsEl = document.getElementById('sinceTimerUs');
  if(sinceUsEl){
    var sinceUsAttr = sinceUsEl.getAttribute('data-since-us');
    var sinceUsDate = sinceUsAttr ? new Date(sinceUsAttr) : null;
    function updateSinceUs(){
      var now = new Date();
      if(!sinceUsDate || isNaN(sinceUsDate.getTime())){
        sinceUsEl.textContent = 'Invalid date — edit the data-since-us attribute';
        return;
      }
      var diff = now - sinceUsDate;
      if(diff >= 0){
        sinceUsEl.textContent = 'Us clock: ' + formatSpan(diff) + ' (since ' + sinceUsDate.toDateString() + ')';
      } else {
        sinceUsEl.textContent = 'Time until: ' + formatSpan(diff) + ' (until ' + sinceUsDate.toDateString() + ')';
      }
    }
    updateSinceUs();
    setInterval(updateSinceUs, 1000);
  }
});
