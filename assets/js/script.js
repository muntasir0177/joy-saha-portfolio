// Navbar scroll glass effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add(
            "bg-gradient-to-r",
            "from-[#010101]",
            "to-[#830A65]",
            "backdrop-blur-md",
            "border-b",
            "border-white/20",
            "shadow-lg",
        );
    } else {
        navbar.classList.remove(
            "bg-gradient-to-r",
            "from-[#E94A11]",
            "to-[#830A65]",
            "backdrop-blur-md",
            "border-b",
            "border-white/20",
            "shadow-lg",
        );
    }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const ham1 = document.getElementById("ham1");
const ham2 = document.getElementById("ham2");
const ham3 = document.getElementById("ham3");

hamburger.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        ham1.style.transform = "";
        ham2.style.opacity = "";
        ham3.style.transform = "";
        ham3.style.width = "1rem";
    } else {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        ham1.style.transform = "translateY(6.5px) rotate(45deg)";
        ham2.style.opacity = "0";
        ham3.style.transform = "translateY(-6.5px) rotate(-45deg)";
        ham3.style.width = "1.5rem";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 1. Testimonial Carousel
    new Splide("#testimonial-carousel", {
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 3000,
        arrows: false,
        pagination: true,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    }).mount();

    // 2. About Me Carousel
    new Splide("#about-carousel", {
        type: "loop",
        drag: "free",
        focus: "center",
        autoWidth: true,
        gap: "2rem",
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: 0.7,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount(window.splide.Extensions); // Pass extension here
});
