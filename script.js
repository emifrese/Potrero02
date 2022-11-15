const msg = "Bienvenida";

// alert(msg);

const button = document.querySelector("#adaptive");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const cardContainer = document.getElementsByClassName("card-body");
const buttonInfo = document.querySelector("#devInfo");

console.log(body);

const toggleClass = () => {
  body.classList.toggle("adaptive");
  header.classList.toggle("adaptiveHeader");
  footer.classList.toggle("adaptiveFooter");
  Array.from(cardContainer).forEach((item) =>
    item.classList.toggle("adaptiveCard")
  );
};

const showInfo = () => {
  alert(
    JSON.stringify({
      Name: "Emiliano",
      LastName: "Frese",
      GitHub: "emifrese",
    })
  );
};

button.addEventListener("click", () => toggleClass());
buttonInfo.addEventListener("click", () => showInfo());
