// get the toggle button element via its class name, [0] gets the 1st element

const toggleButton = document.getElementsByClassName("toggle-btn")[0]

// get the navbarlinks element via its class name

const navbarLinks = document.getElementsByClassName("navbar-links")[0]

// get toggleButton and add an event listener for click, i.e. when button is clicked,


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active")
})
