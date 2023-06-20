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
const compWork=document.querySelector('.comp')
const load=document.querySelector(".load")
let filtered=[]
let copyData=[]
let defaultArr=[]
let num=4
let favData
let BASE_URL="http://localhost:8080/workers"
let BASE_URL_teams="http://localhost:8081/teams"

async function getDataUsers() {
  let res = await axios.get(BASE_URL);
  let data = res.data;
  // console.log(data);
  getCardWorker(data)
}

getDataUsers()

function getCardWorker(arr){
  comp.innerHTML=""
  
  arr.slice(0,num).forEach(element => {
    comp.innerHTML+=`
    <div
              class="col col-md-3 col-lg-3 p-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div class="card-work" style="width: 18rem">
                <img
                  src="${element.photo}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h3 class="card-title text-center">${element.fullname}</h3>
                  <p class="card-text text-center">${element.job}</p>
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



// async function getDataTeams() {
//   let res2 = await axios.get(BASE_URL_teams);
//   let data2 = res2.data;
//   // console.log(data);
//   getCardWorker(data2)
// }

// getDataTeams()

// function getCardWorker(team){
//   compWork.innerHTML=""
//   team.forEach(work => {
//     compWork.innerHTML+=`
//     <div class="col-12 col-md-3 col-lg-3 d-flex align-items-center">
//               <div id="comp">
//                 <div
//                   class="work-wrap aos-init aos-animate"
//                   data-aos="flip-left"
//                   data-aos-duration="1000"
//                   data-aos-delay="100"
//                 >
//                   <div class="img">
//                     <img src="${work.image}" class="" alt="" />
//                   </div>
//                   <div class="text">
//                     <span class="category">${work.jobs}</span>
//                     <h5><a href="#">${work.description}</a></h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
   
//     `
//   });
// }


// load.addEventListener("click", (e) => {
//   e.preventDefault();
//   num = num + 4;
//   filtered = copyData.slice(0, num).filter((item) => {
//     return item.title
//       .toLocaleLowerCase()
//       .includes(search.value.toLocaleLowerCase());
//   });
//   console.log(defaultArr);
//   defaultArr = filtered;
//   getAllData();
// });

load.addEventListener("click", async function (e) {
  e.preventDefault();
  num = num + 4;
  getDataUsers();
});