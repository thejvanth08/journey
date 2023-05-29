const navbar = document.querySelector(".navbar");
const loginForm = document.querySelector(".login-form");
const searchForm = document.querySelector(".search-btn");

// toggle means ON or OFF (remove / add)
document.getElementById("menu-btn").onclick = () => {
    navbar.classList.toggle("active");
}

document.getElementById("login-btn").onclick = () => {
    loginForm.classList.toggle("active");
}

document.getElementById("search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}