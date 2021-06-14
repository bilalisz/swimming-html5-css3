

const toogleBtn = () => {
  const ul = document.querySelector(".nav-list");
  ul.classList.add("trans");
  ul.style.display = "block";
  const toggleOpen = document.querySelector("#toggle-open");
  const toggleClose = document.querySelector("#toggle-close");
  console.log(toggleOpen);
  toggleOpen.style.display = "none";
  toggleClose.style.display = "block";
};

const toogleBtnClose = () => {
  const ul = document.querySelector(".nav-list");
  ul.style.display = "none";
  const toggleOpen = document.querySelector("#toggle-open");
  const toggleClose = document.querySelector("#toggle-close");
  console.log(toggleOpen);
  toggleOpen.style.display = "block";
  toggleClose.style.display = "none";
};


