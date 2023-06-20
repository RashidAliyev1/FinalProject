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

const comp=document.querySelector('.team-dinamik')
const load=document.querySelector(".load")
let filtered=[]
let copyData=[]
let defaultArr=[]
let num=4
let favData
let BASE_URL="http://localhost:8080/workers"
let BASE_URL2=" http://localhost:8080/favs"

async function getDataUsers() {
  let res = await axios.get(BASE_URL);
  let data = res.data;
  // console.log(data);
  getCardWorker(data)
}

getDataUsers()

function getCardWorker(arr){
  comp.innerHTML=""
  arr.forEach(element => {
    comp.innerHTML+=`
    <div
              class="col col-md-3 col-lg-3 p-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div class="card-work" style="width: 18rem">
                <img
                  src="${element.img}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h3 class="card-title text-center">${element.employee}</h3>
                  <p class="card-text text-center">CEO, Founder & Developer</p>
                </div>
              </div>

              <span class="team-wrap">
                
                <ul class="team-icons">
                  <li>
                    <a href="#"><i class="p-2 fa-brands fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="p-2 fa-brands fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="p-2 fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="p-2 fa-brands fa-google-plus-g"></i
                    ></a>
                  </li>
                </ul>
        
              </span>
            </div>
    `
  });
}
