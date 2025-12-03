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

        const potsKeywords = ["pot", "stockpot", "saucepan", "pans", "kawali", "wok", "dutch oven", "casserole"];
        const dishesKeywords = ["dish", "dishes", "plate", "bowls", "bowl", "utensils", "knives", "cups", "glasses", "chopping boards"];
        const sinkKeywords = ["sink", "lavabo", "faucet", "drain", "strainer", "countertop edge", "rack"];
        const applianceKeywords = ["appliance", "appliances", "toaster", "microwave", "oven", "blender", "rice cooker", "coffee maker", "electric kettle", "dishwasher", "refrigerator", "fridge", "ref"];

        if (potsKeywords.some(k => term.includes(k))) {
            window.location.href = "pots.html";
        }
        else if (dishesKeywords.some(k => term.includes(k))) {
            window.location.href = "dishes.html";
        }
        else if (sinkKeywords.some(k => term.includes(k))) {
            window.location.href = "sink.html";
        }
        else if (applianceKeywords.some(k => term.includes(k))) {
            window.location.href = "appliances.html";
        }
        else {
            alert("No matching category found.");
        }

    });
}
