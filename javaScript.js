const randomImg = document.querySelector(".random-img");
const randomBtn = document.querySelector(".btnRandom");
const img = document.querySelector("img");
const url = "https://dog.ceo/api/breeds/image/random";

randomBtn.addEventListener("click", () => {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      randomImg.insertAdjacentHTML(
        "afterbegin",
        `<img src = "${data.message}" >`
      );
    });
});
