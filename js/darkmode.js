// Function to toggle dark mode
function darkmode() {
    var header = document.querySelectorAll(".header-section");
    var element = document.querySelector("body");
    var aboutSections = document.querySelectorAll(".about_section");
    var contact = document.querySelectorAll(".contact_section");

    // Toggle dark mode for the body
    element.classList.toggle("dark-mode");

    // Toggle dark mode for each about section found
    aboutSections.forEach(function(section) {
        section.classList.toggle("dark-mode");
    });

    contact.forEach(function(section) {
        section.classList.toggle("dark-mode");
    });

    // Save the dark mode state to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkmode", "enabled");
    } else {
        localStorage.setItem("darkmode", "disabled");
    }
}

// Check if dark mode is enabled on page load
document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector("body");
    var aboutSections = document.querySelectorAll(".about_section");
    var contact = document.querySelectorAll(".contact_section");

    if (localStorage.getItem("darkmode") === "enabled") {
        element.classList.add("dark-mode");
        aboutSections.forEach(function(section) {
            section.classList.add("dark-mode");
        });
        contact.forEach(function(section) {
            section.classList.add("dark-mode");
        });
    }
});
