// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// on click, if links botton has the "show-links" class => remove it, if it does not => add it.

navToggle.addEventListener("click", () => {
    // USING IF/ELSE
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // USING THE TOGGLE METHOD
    links.classList.toggle("show-links");
    });