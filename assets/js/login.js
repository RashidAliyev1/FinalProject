let emailLogin = document.querySelector("#login-email");
let passwordLogin = document.querySelector("#password");
let btnLogin = document.querySelector("#login-btn");
let form = document.querySelector("form");
let BASE_URL_USERS = "http://localhost:8080/users";

async function getDataUsers() {
  let res = await axios.get(BASE_URL_USERS);
  let data = res.data;
  // console.log(data);
}

getDataUsers();

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let res = await axios.get(BASE_URL_USERS);
  let data = res.data;
  let isAdmin;
  data.find(
    (item) =>
      item.email == emailLogin.value &&
      item.password == passwordLogin.value &&
      (isAdmin = item.isAdmin)
  );
  let checkUser = data.find(
    (item) =>
      item.email == emailLogin.value && item.password == passwordLogin.value
  );
  // console.log(isAdmin)
  if (checkUser && isAdmin) {
    window.location = "./admin-panel/admin.html";
  } else if (checkUser) {
    window.location = "./accUser.html";
  } else {
    alert("not user");
  }
});
