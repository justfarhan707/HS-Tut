document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(async (el) => {
        const file = el.getAttribute("data-include");
        const res = await fetch(file);
        const html = await res.text();
        el.outerHTML = html;

        // 🔥 INIT NAV AFTER LOAD
        if (file.includes("nav.html") && typeof initNav === "function") {
            setTimeout(initNav, 0);
        }
    });
});
