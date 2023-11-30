const nav = document.querySelector("nav");
const burgerBtn = document.getElementById("burgerMenu");

burgerBtn.addEventListener("click", (e) => {
  const elem = document.createElement("div");
  elem.classList.add("overlay");
  e.stopPropagation();
  nav.classList.toggle("display");
  e.target.classList.toggle("open");

  nav.addEventListener("click", (evt) => evt.stopPropagation());
  window.addEventListener("scroll", () => {
    nav.classList.remove("display");
    e.target.classList.remove("open");
    document.body.removeChild(document.querySelector(".overlay"));
  });

  if (nav.classList.contains("display")) {
    document.body.prepend(elem);
    document.body.addEventListener("click", () => {
      nav.classList.remove("display");
      e.target.classList.remove("open");
      document.body.removeChild(document.querySelector(".overlay"));
    });
  } else {
    document.body.removeChild(document.querySelector(".overlay"));
  }
});
