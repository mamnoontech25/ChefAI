document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("recipe-search-form");
    const searchInput = document.getElementById("recipe-search-input");
    const resultsDiv = document.getElementById("recipe-results");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query.length > 0) {
            resultsDiv.innerHTML = `<p>Searching for recipes with: <b>${query}</b>...</p>`;
            setTimeout(() => {
                resultsDiv.innerHTML += `<p>🔍 No recipe found! (API coming soon)</p>`;
            }, 1500);
        }
    });
});
