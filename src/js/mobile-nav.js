var content = document.getElementById("main-content");
var nav = document.getElementById("nav-menu-pages");
var menuButton = document.getElementById("menu-hamburger");

const toggleMobileNav = () => {
    if (isMobileNavExpanded()) {
        collapseMobileNav()
    } else {
        expandMobileNav()
    }
};

const expandMobileNav = () => {
    nav.style.display = "flex";
};

const collapseMobileNav = () => {
    nav.style.display = "none";
};

const isMobileNavExpanded = () => {
    return nav.style.display === "flex";
};

const contentClick = () => {
    if (window.innerWidth < 1100) {
        collapseMobileNav();
    }
};

const windowResize = () => {
    if (!isMobileNavExpanded() && window.innerWidth >= 1100) {
        expandMobileNav();
    }
    else if (isMobileNavExpanded() && window.innerWidth < 1100) {
        collapseMobileNav();
    }
};

menuButton.addEventListener("click", toggleMobileNav);
menuButton.addEventListener("tap", toggleMobileNav);

content.addEventListener("click", contentClick);
content.addEventListener("tap", contentClick);

window.addEventListener("resize", windowResize);