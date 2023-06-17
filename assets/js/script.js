var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;
  }
});

function nav(){
  const burger = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar-collapse');
  // const navButton = document.querySelector('.nav');
  burger.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      burger.remove.toggle("collapsed")
  })
}
