/** @format */

// ************** set date *****************
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ************** nav toggle **************
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-options");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-nav-options");
});

// ***************** fixed nav *************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 16) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// **************** smooth scroll ***********

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.classList.remove("show-nav-options");
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position;
    if (navbar.classList.contains("fixed")) {
      position = element.offsetTop - 51;
    } else {
      // for initial position of nav bar 100 px is for random
      position = element.offsetTop - 100;
    }

    if (window.innerWidth < 992) {
      if (navbar.classList.contains("fixed")) {
        position = element.offsetTop - 51;
      } else {
        position = element.offsetTop - 321 - 51;
      }
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
  });
});
