// ************** set date *****************
const date = document.getElementById("date").innerHTML=new Date().getFullYear();

// ************** nav toggle **************
const navBtn =document.getElementById("nav-toggle");
const links =document.getElementById("nav-options");

navBtn.addEventListener("click",()=>{
    links.classList.toggle("show-nav-options")
})

// ***************** fixed nav *************
const navbar =document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 16) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed")
    }
})
