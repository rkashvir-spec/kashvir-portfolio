let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// Dark mode selector
let darkmodeIcon = document.querySelector("#darkmode-icon");

// 1. Toggle mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

// 2. Toggle Dark Mode
darkmodeIcon.onclick = () => {
    // Toggles the sun/moon visual icon representation
    darkmodeIcon.classList.toggle("fa-sun");
    darkmodeIcon.classList.toggle("fa-moon");
    
    // Toggles the actual .dark-mode class on the body tag
    document.body.classList.toggle("dark-mode");
};

// 3. Automatically close mobile navbar when a link is clicked
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    };
});

// 4. Scroll Reveal Intersection Observer Configuration
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adds active visibility style class when section hits screen thresholds
            entry.target.classList.add("show-animation");
            
            // Optional: Un-observe element if you only want section to fade in ONCE
            // observer.unobserve(entry.target); 
        } else {
            // Optional: Remove class to make elements slide back out if you scroll away
            entry.target.classList.remove("show-animation");
        }
    });
}, {
    threshold: 0.15 // Triggers animation when 15% of item is viewable
});

// Target all hidden-animation nodes across your viewport layout
const hiddenElements = document.querySelectorAll(".hidden-animation");
hiddenElements.forEach((el) => observer.observe(el));
