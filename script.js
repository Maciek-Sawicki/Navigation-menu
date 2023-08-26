const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-wrapper li");

    const menuFunction = () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 6 + 0.2}s`;
            }
        });
    };

    burger.addEventListener("click", menuFunction);

    navLinks.forEach((link) => {
        link.addEventListener("click", menuFunction);
    });
};

navSlide();