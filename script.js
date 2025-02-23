document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const recipeCards = document.querySelectorAll(".recipe-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        recipeCards.forEach(card => {
            const recipeName = card.querySelector(".recipe-title").textContent.toLowerCase();
            
            if (recipeName.includes(searchText)) {
                card.style.display = "block"; // Show matching recipes
            } else {
                card.style.display = "none"; // Hide non-matching recipes
            }
        });
    });
});
