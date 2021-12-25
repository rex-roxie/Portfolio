const body = document.getElementById("body");
const nav = document.getElementById("nav");
const bars = document.getElementById("bars");
const x = document.getElementById("x");
const adjust = document.getElementById("adjust");
const rest_of_body = document.getElementById("rest-of-body");
const homelink = document.getElementById("homelink");
const aboutlink = document.getElementById("aboutlink");
const projectslink = document.getElementById("projectslink");
const skillslink = document.getElementById("skillslink");

const CloseNav = () => {
    nav.style.width = "0%";
    homelink.style.display = "none";
    aboutlink.style.display = "none";
    projectslink.style.display = "none";
    skillslink.style.display = "none";
    x.style.display = "none";
    bars.style.display = "block";
}

const lightMode = () => {
    body.classList.toggle("dark-mode");
    isDark = false;
}

bars.addEventListener("mousedown", function() {
    nav.style.width = "60%";
    homelink.style.display = "block";
    aboutlink.style.display = "block";
    projectslink.style.display = "block";
    skillslink.style.display = "block";
    x.style.display = "block";
    bars.style.display = "none";
});

x.addEventListener("mousedown", function() {
    nav.style.width = "0%";
    homelink.style.display = "none";
    aboutlink.style.display = "none";
    projectslink.style.display = "none";
    skillslink.style.display = "none";
    x.style.display = "none";
    bars.style.display = "block";
});