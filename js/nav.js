const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = 'https://forms.gle/YE4JKVPkLnXrGoNs8';
    })
})

const toggleMenu = document.querySelector('#menuToggle');
const menuToToggle = document.querySelector(".header-nav__items");

toggleMenu.addEventListener("click", () => {
    if (menuToToggle.style.transform !== 'none') {
        menuToToggle.style.transform = 'none'
    } else (
        menuToToggle.style.transform = 'translate(-100%)'
    )
    

})