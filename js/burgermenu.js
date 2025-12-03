
const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");
const headerHolder = document.querySelector(".header-holder");

openMobileMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
    headerHolder.classList.remove("menu-open");
    
    
  } else {
    headerMenu.classList.add("active");
    headerHolder.classList.add("menu-open");
    openMobileMenuBtn.classList.add("open");
  }
})

