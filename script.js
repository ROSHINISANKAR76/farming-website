// JavaScript functionality for button click and hover effects

document.addEventListener("DOMContentLoaded", () => {
    const heroBtn = document.querySelector(".hero .btn");
    const heroContent = document.querySelector(".hero .content");

    // Button click to reveal content
    heroBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (heroContent.style.display === "block") {
            heroContent.style.display = "none";
        } else {
            heroContent.style.display = "block";
        }
    });

    // Hover effects for service cards
    const serviceCards = document.querySelectorAll(".service");

    serviceCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });
    });
});