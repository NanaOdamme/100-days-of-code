// Sample candidate data (replace with actual candidate details)
const candidates = [
    { id: 1, name: "Candidate 1", votes: 0 },
    { id: 2, name: "Candidate 2", votes: 0 },
    { id: 3, name: "Candidate 3", votes: 0 }
];

// Function to display voting results
function displayResults() {
    const panel = document.getElementById("resultsPanel");
    panel.innerHTML = ""; // Clear previous content

    candidates.forEach(candidate => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${candidate.name}</h5>
                    <p class="card-text">Votes: ${candidate.votes}</p>
                </div>
            </div>
        `;
        panel.appendChild(card);
    });
}

// Initial display of results
displayResults();
