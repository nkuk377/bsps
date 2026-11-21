document.addEventListener("DOMContentLoaded", () => {

    const posterLink = document.getElementById("poster-reveal");

    if (!posterLink) return;

    posterLink.addEventListener("click", (event) => {

        event.preventDefault();

        const un = "bsps";
        const dom = "soci.slmail.me";

        const posta = un + "@" + dom;

        // Update the link
        posterLink.textContent = posta;
        posterLink.href = "mailto:" + posta;

    }, { once: true });

});
