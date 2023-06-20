// let loginForm = document.querySelector(".my-form");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");

//     console.log('Email:', email.value);
//     console.log('Password:', password.value);
//     // process and send to API
// });

let emailLogin = document.querySelector("#login-email");
// let passwordLogin = document.querySelector("#login-password");
let passwordLogin = document.querySelector("#password");
let btnLogin = document.querySelector("#login-btn");
let form = document.querySelector("form");
let BASE_URL_USERS = "http://localhost:8080/users";

async function getDataUsers() {
  let res = await axios.get(BASE_URL_USERS);
  let data = res.data;
//   console.log(data);
}

getDataUsers()


// form.addEventListener("submit", async function () {
//   let res = await axios.get(BASE_URL_USERS);
//   let data = res.data;
//   console.log(data);
//   data.find((item) => {
//     if (
//       item.isAdmin &&
//       emailLogin.value == "rashid@gmail.com" &&
//       passwordLogin.value == 123456
//     ) {
//       window.location = `/admin-panel/admin.html`;
//     } else if (
//       data.filter(
//         (item) =>
//           item.email == emailLogin.value && item.password == passwordLogin.value
//       )
//     ) {
//       window.location = `index.html`;
//     } else {
//       alert("Pls Sign Up!");
//     }
//   });
// });


// btnLogin.addEventListener("click", async function(){
//     let res = await axios.get(BASE_URL_USERS);
//     let data = res.data;
//     console.log(data);
//     data.find((item) => {
//         if (
//           item.isAdmin &&
//           emailLogin.value == "rashid@gmail.com" &&
//           passwordLogin.value == 123456
//         ) {
//           window.location = `index.html`;
//         } else if (
//           data.find(
//             (item) =>
//               item.email == emailLogin.value && item.password == passwordLogin.value
//           )
//         ) {
//           window.location = `index.html`;
//         } else {
//           alert("Pls Sign Up!");
//         }
//       });
// })

btnLogin.addEventListener("click", async function () {
    let res = await axios.get(BASE_URL_USERS);
    let data = res.data;
    data.find((user) => {
      if (user.isAdmin && emailLogin.value=="aliyev@gmail.com" && passwordLogin.value==232323) {
        window.location = `/admin-panel/admin.html`;
      } else if(data.filter((user)=>user.email==emailLogin.value && user.password==passwordLogin.value)){
        window.location = `index.html`;
      }else{
        alert("Pls Sign Up!")
      } 
    });
  });