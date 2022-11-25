let burger = document.querySelector("#burger");
let nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  if (!burger.classList.contains("change")) {
    burger.classList.add("change");
    nav.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    burger.classList.remove("change");
    nav.classList.remove("active");
    document.body.style.overflow = "visible";
  }
});

let title_about_us = document.querySelector(".title_about_us");
let btn_about_us = document.querySelectorAll(".btn_about_us"); 


btn_about_us.forEach((elem)=>{
elem.addEventListener("click", () => { 
  burger.classList.remove("change"); 
  nav.classList.remove("active");
  document.body.style.overflow = "visible";
  title_about_us.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
})

let btn_app = document.querySelectorAll(".btn_app");
let title_app = document.querySelector(".title_app");

btn_app.forEach((elem)=>{
  elem.addEventListener("click", () => {
    burger.classList.remove("change");
    nav.classList.remove("active");
    document.body.style.overflow = "visible";
    title_app.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  
})
