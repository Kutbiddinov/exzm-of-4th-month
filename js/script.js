let elList = document.querySelector("#list");
let elLogOut = document.querySelector("#logout");
const cardMadal = document.querySelector(".cardMadal");
const madalname = document.getElementById("madalname");
const madalemail = document.getElementById("madalemail");
const madalpassword = document.getElementById("madalpassword");
const madalpic = document.getElementById("madalpic");
const new1 = document.querySelector("#one");
const newsm = document.querySelector("#sth");

new1.addEventListener("click", (evt) => {
  if ((newsm.classList = "a")) {
    newsm.classList = "b";
  }
});

cardMadal.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      id: 1,
      email: madalemail.value,
      password: "1234",
      name: madalname.value,
      role: "customer",
      avatar: madalpic.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  cardMadal.style.display = "none";
});

let token = localStorage.getItem("token") || false;
if (!token) {
  window.location.replace("login.html");
}

elLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("login.html");
});

async function userRenderFunc(element) {
  let data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  console.log(data);
  if (data) {
    data.forEach((user) => {
      let newLi = document.createElement("li");
      let checkInpt = document.createElement("input");
      let img = document.createElement("img");
      let name = document.createElement("h3"); // name
      let iD = document.createElement("h3"); // id
      let date = document.createElement("p"); // date
      let parentName = document.createElement("h3"); //parent name
      let city = document.createElement("h3"); // city
      let linkNum = document.createElement("a"); // number
      // let contacts = document.createElement("a");
      // let contacts1 = document.createElement("a");

      newLi.classList.add("item");
      checkInpt.classList.add("checkbox");
      img.classList.add("img");
      name.classList.add("name");
      iD.classList.add("id");
      date.classList.add("date");
      linkNum.classList.add("numlink");
      parentName.classList.add("parentName");
      city.classList.add("city");

      checkInpt.setAttribute("type", "checkbox");
      name.textContent = user.name;
      iD.textContent = user.id;
      date.textContent = "01,02,03";
      parentName.textContent = "Margeret Black";
      city.textContent = user.address.city;
      linkNum.textContent = user.phone;
      linkNum.setAttribute("href", `tel:+${user.phone}`);

      newLi.append(checkInpt, img, name, iD, date, parentName, city, linkNum);
      newLi.setAttribute("style", "width: 100%;");

      element.appendChild(newLi);
    });
  }
}

userRenderFunc(elList);

import { Api } from "./api.js";
