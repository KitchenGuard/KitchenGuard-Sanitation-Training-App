/* ===== Accordion Feature ===== */
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".pot-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            // Close other open sections (optional)
            document.querySelectorAll(".pot-content").forEach(section => {
                if (section !== content) {
                    section.classList.remove("open");
                }
            });

            content.classList.toggle("open");
        });
    });
});

/* ===== Search Feature (index.html only) ===== */
if (document.getElementById("searchBtn")) {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const term = searchInput.value.toLowerCase();

        if (!term) {
            alert("Please type something to search.");
            return;
        }

        // Simple keyword-based redirect
        if (term.includes("pot")) window.location.href = "pots.html";
        else if (term.includes("dish")) window.location.href = "dishes.html";
        else if (term.includes("sink")) window.location.href = "sink.html";
        else if (term.includes("appliance")) window.location.href = "appliances.html";
        else alert("No matching category found.");
    });
}
