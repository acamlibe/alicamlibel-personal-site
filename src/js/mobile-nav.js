var content = document.getElementById("main-content");
var nav = document.getElementById("nav-menu-pages");
var menuButton = document.getElementById("menu-hamburger");

const expandMobileNav = () => {
    nav.style.display = "flex";
};

const collapseMobileNav = () => {
    nav.style.display = "none";
};

const isMobileNavExpanded = () => {
    return nav.style.display === "flex";
};

menuButton.addEventListener("touchstart", function() {
    if (isMobileNavExpanded()) {
        collapseMobileNav()
    } else {
        expandMobileNav()
    }
});
menuButton.addEventListener("click", function() {
    if (isMobileNavExpanded()) {
        collapseMobileNav()
    } else {
        expandMobileNav()
    }
});
content.addEventListener("touchstart", function() {
    if (window.innerWidth < 1100) {
        collapseMobileNav();
    }
});
content.addEventListener("click", function() {
    if (window.innerWidth < 1100) {
        collapseMobileNav();
    }
});

window.addEventListener("resize", function() {
    if (!isMobileNavExpanded() && window.innerWidth >= 1100) {
        expandMobileNav();
    }
    else if (isMobileNavExpanded() && window.innerWidth < 1100) {
        collapseMobileNav();
    }
});