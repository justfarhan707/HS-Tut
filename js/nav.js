function initNav() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    /* Active Page Highlight */
    const page = document.body.dataset.page;
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.dataset.page === page) {
            link.style.color = "var(--accent-gold)";
        }
    });
}
