// Small helpers: set current year and simple scroll reveal
document.addEventListener('DOMContentLoaded', function(){
  // year
  var y = new Date().getFullYear();
  var el = document.getElementById('year'); if(el) el.textContent = y;

  // simple reveal on scroll
  var reveals = document.querySelectorAll('.section, .card');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        // add inview to parent and stagger children
        e.target.classList.add('inview');
        var children = e.target.querySelectorAll('.card, .card-media img, .card-body, .hero-left, .avatar');
        children.forEach(function(ch, i){
          ch.style.transitionDelay = (i * 80) + 'ms';
        });
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  reveals.forEach(function(r){io.observe(r)});

  // ensure hero animates immediately if visible
  var heroLeft = document.querySelector('.hero-left');
  var avatar = document.querySelector('.avatar');
  if(heroLeft && avatar){
    setTimeout(function(){
      heroLeft.classList.add('inview');
      avatar.classList.add('inview');
    }, 250);
  }
});
