const navbar = document.querySelector(".navbar");
const loginForm = document.querySelector(".login-form");
const searchForm = document.querySelector(".search-form");
const themeBtn = document.querySelector("#theme-btn");


// toggle means ON or OFF (remove / add)
document.getElementById("menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    // for avoiding untidy overlaps
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
}

document.getElementById("login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    navbar.classList.remove("active"); 
    searchForm.classList.remove("active");
}

document.getElementById("search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}

// during scrolling, removing the menus
// window -> global object (browser page or window)
window.onscroll = () => {
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
}

themeBtn.onclick = () => {
    // toggling 2 diff classes not working
    // themeBtn.classList.toggle("fa-sun");
    // themeBtn.classList.toggle("fa-solid");

    // when it has fa-moon, currently it's in light mode
    if(themeBtn.classList["1"] == "fa-moon") {
        // now, dark mode is on
        themeBtn.classList.replace("fa-moon", "fa-sun");
        // adding active class to body
        document.body.classList.add("active");
    } else {
        // now, light mode is on
        themeBtn.classList.replace("fa-sun", "fa-moon");
        document.body.classList.remove("active");
    }
}
