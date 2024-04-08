// Sample candidate data (replace with actual candidate details)
const candidates = [
    { id: 1, name: "Candidate 1", votes: 0 },
    { id: 2, name: "Candidate 2", votes: 0 },
    { id: 3, name: "Candidate 3", votes: 0 }
];

// Function to display candidates in the panel
function displayCandidates() {
    const panel = document.getElementById("candidatesPanel");
    panel.innerHTML = ""; // Clear previous content

    candidates.forEach(candidate => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${candidate.name}</h5>
                    <p class="card-text">Votes: ${candidate.votes}</p>
                    <button class="btn btn-primary btn-sm voteBtn" data-id="${candidate.id}">Vote</button>
                </div>
            </div>
        `;
        panel.appendChild(card);
    });

    // Add event listener to vote buttons
    const voteButtons = document.querySelectorAll(".voteBtn");
    voteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const candidateId = parseInt(btn.getAttribute("data-id"));
            voteForCandidate(candidateId);
        });
    });
}

// Function to handle voting for a candidate
function voteForCandidate(candidateId) {
    const candidate = candidates.find(c => c.id === candidateId);
    if (candidate) {
        candidate.votes++;
        displayCandidates();
        showMessage(`You voted for ${candidate.name}`);
    }
}

// Function to display messages
function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
}

// Initial display of candidates
displayCandidates();
