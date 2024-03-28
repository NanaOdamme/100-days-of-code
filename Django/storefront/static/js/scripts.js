document.addEventListener("DOMContentLoaded", function () {
    axios.get("http://localhost:8000/api/")
        .then(function (response) {
            const gamesList = document.getElementById("gamesList");
            response.data.forEach(function (game) {
                const gameCard = document.createElement("div");
                gameCard.classList.add("col-md-4", "mb-4");
                gameCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${game.name}</h5>
                            <p class="card-text">Year: ${game.year}</p>
                            <a href="${game.link}" class="btn btn-primary" target="_blank">Download</a>
                        </div>
                    </div>
                `;
                gamesList.appendChild(gameCard);
            });
        })
        .catch(function (error) {
            console.error("Error fetching games data:", error);
        });
});
