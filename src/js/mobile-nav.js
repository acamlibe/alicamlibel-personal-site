var content = document.getElementById("main-content");
var nav = document.getElementById("nav-menu-pages");

const toggleMobileNav = () => {
    if (isMobileNavExpanded()) {
        collapseMobileNav()
    } else {
        expandMobileNav()
    }
}

const expandMobileNav = () => {
    nav.style.display = "flex";
}

const collapseMobileNav = () => {
    nav.style.display = "none";
}

const isMobileNavExpanded = () => {
    return nav.style.display === "flex";
}

content.onclick = collapseMobileNav;