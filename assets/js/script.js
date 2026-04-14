const navbar = document.getElementById("navbar");
// Check if we are on the home page
const isHomePage = document.body.id === "home-page";

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        if (isHomePage) {
            // Gradient effect for Home Page
            navbar.classList.add(
                "bg-gradient-to-r",
                "from-[#010101]",
                "to-[#830A65]",
                "backdrop-blur-md",
                "border-b",
                "border-white/20",
                "shadow-lg",
            );
            navbar.classList.remove("bg-white", "text-black");
        } else {
            // White effect for Other Pages
            navbar.classList.add(
                "bg-white",
                "border-b",
                "border-gray-200",
                "shadow-lg",
            );
            navbar.classList.remove(
                "bg-gradient-to-r",
                "from-[#010101]",
                "to-[#830A65]",
                "text-[#c8c9d4]",
            );

            // Optional: You might need to toggle link colors if they are too light for a white BG
            navbar
                .querySelectorAll("a, span")
                .forEach((el) => el.classList.add("text-black"));
        }
    } else {
        // Reset state when at the top
        navbar.classList.remove(
            "bg-gradient-to-r",
            "from-[#010101]",
            "to-[#830A65]",
            "bg-white",
            "backdrop-blur-md",
            "border-b",
            "shadow-lg",
        );

        // Reset text colors for non-home pages if you changed them
        if (!isHomePage) {
            navbar
                .querySelectorAll("a, span")
                .forEach((el) => el.classList.remove("text-black"));
        }
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

// Filter functionality (case-study.html)
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();

                filterButtons.forEach((btn) => {
                    btn.classList.remove(
                        "bg-[#7E5EFF]",
                        "text-white",
                        "active",
                    );
                    btn.classList.add("bg-[#F3F4F4]", "text-[#555555]");
                });
                button.classList.add("bg-[#7E5EFF]", "text-white", "active");
                button.classList.remove("bg-[#F3F4F4]", "text-[#555555]");

                const filterValue = button.getAttribute("data-filter");

                projectItems.forEach((item) => {
                    const category = item.getAttribute("data-category");

                    if (filterValue === "all" || category === filterValue) {
                        item.style.display = "block";
                        item.animate(
                            [
                                { opacity: 0, transform: "scale(0.95)" },
                                { opacity: 1, transform: "scale(1)" },
                            ],
                            {
                                duration: 300,
                                easing: "ease-out",
                            },
                        );
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    }
});

// Counter animation (case-study-details.html)
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
    const speed = 100;

    const startCounter = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(startCounter, {
        threshold: 0.5,
    });

    counters.forEach((counter) => observer.observe(counter));
}

// Splide carousels
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("testimonial-carousel")) {
        new Splide("#testimonial-carousel", {
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: true,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        }).mount();
    }

    if (document.getElementById("about-carousel")) {
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
        }).mount(window.splide.Extensions);
    }
});
