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
        window.location.href = 'https://forms.gle/Dw7BKGNMRYvg92ju7';
    })
})