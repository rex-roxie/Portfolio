const nav = document.getElementById("nav");
const bars = document.getElementById("bars");
const x = document.getElementById("x");
const rest_of_body = document.getElementById("rest-of-body");
const aboutlink = document.getElementById("aboutlink");
const projectslink = document.getElementById("projectslink");
const skillslink = document.getElementById("skillslink");
let isNavOpen = false;

const OpenNav = () => {
    nav.style.display = "flex";
    nav.style.opacity = "70%";
    bars.style.display = "none";
    x.style.display = "block";
    isNavOpen = true;
}

const CloseNav = () => {
    nav.style.display = "none";
    bars.style.display = "block";
    x.style.display = "none";
    isNavOpen = false;
}

bars.onclick = OpenNav;
x.onclick = CloseNav;

rest_of_body.addEventListener("mousedown", CloseNav);