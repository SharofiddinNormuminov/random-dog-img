const randomImg = document.querySelector(".random-img");
const randomBtn = document.querySelector(".btnRandom");
const img = document.querySelector("img");
const loader = document.querySelector(".wrapper");

randomBtn.addEventListener("click", () => {

  randomImg.classList.add("hide");
  loader.classList.remove("hide");

  const req = new XMLHttpRequest();
  req.open("GET", "https://dog.ceo/api/breeds/image/random");
  req.send();

  req.addEventListener("load", function () {
    const dogObj = JSON.parse(this.responseText);
    img.src = dogObj.message;

    setTimeout(() => {
      loader.classList.add("hide");
      randomImg.classList.remove("hide");
    }, 2000);
  });
});
