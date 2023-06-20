const BASE_URL = "http://localhost:8080/workers";
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const photo = document.querySelector("#photo");
const title = document.querySelector(".title");
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const submitBtn = document.querySelector(".submit");
const search = document.querySelector("#search");

let copyArr = [];
let filtered = [];
let status = false;
let workerId;
let base64;

function drawTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td><img src="${element.photo} " width="100%"  alt="" /></td>
        <td style="text-transform:uppercase">${element.fullname}</td>
        <td>${element.job}</td>
        <td>
          <a href="#"  class="btn text-success" onclick=editWorker(${element.id}) ><i class="fa-solid fa-pen-to-square fa-bounce"></i></a>
          <a href="#" class="btn text-danger" onclick=delWorker(${element.id},this)><i class="fa-solid fa-trash-arrow-up fa-bounce"></i></a>
        </td>
        `;
    tbody.append(tr);
  });
}


async function getData() {
  try {
    let res = await axios(`${BASE_URL}`);
    let data = res.data;
    copyArr = data;
    filtered = filtered.length || search.value ? filtered : data;
    drawTable(filtered);
  } catch (error) {
    console.log(error);
  }
}
getData();

async function delWorker(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("tr").remove();
  } catch (error) {
    console.log(error);
  }
}


async function editWorker(id) {
  workerId = id;
  status = true;
  filtered = copyArr.find((el) => el.id == id);
  name.value = filtered.fullname;
  job.value = filtered.job;
  submitBtn.innerHTML = "Edit";
  title.innerHTML = "Edit Worker";
}


form.addEventListener("submit", async(e) => {
  e.preventDefault();
  if (name.value && job.value && photo.value) {
    let obj = {
      fullname: name.value,
      job: job.value,
      photo: base64,
    };

    if (status) {
      await axios.patch(`${BASE_URL}/${workerId}`, obj);
    } else {
     await axios.post(BASE_URL, obj);
    }
  } 
});

search.addEventListener("input", async (e) => {
  filtered = copyArr;
  filtered = filtered.filter((el) =>
    el.fullname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getData();
});
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64 = await convertBase64(file);
};

photo.addEventListener("change", (e) => {
  uploadImage(e);
});