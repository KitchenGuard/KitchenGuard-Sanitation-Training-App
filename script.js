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
document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (!searchBtn || !searchInput) {
        console.error("Search button or input not found.");
        return;
    }

    function matchKeyword(term, keywords) {
        return keywords.some(keyword => {
            const k = keyword.toLowerCase();
            return k.includes(term) || term.includes(k);
        });
    }

    searchBtn.addEventListener("click", () => {
        const term = searchInput.value.trim().toLowerCase();

        if (!term) {
            alert("Please type something to search.");
            return;
        }

        const potsKeywords = [
            "pot", "pots", "stockpot", "stock pot",
            "saucepan", "sauce pan", "pan", "pans",
            "kawali", "wok",
            "dutch", "oven", "dutch oven",
            "casserole",
            "saute", "saute pan"
        ];

        const dishesKeywords = [
            "dish", "dishes", "plate", "plates",
            "bowl", "bowls",
            "utensil", "utensils",
            "knife", "knives",
            "cup", "cups",
            "glass", "glasses",
            "chopping board", "chopping boards"
        ];

        const sinkKeywords = [
            "sink", "lavabo",
            "faucet", "drain", "strainer",
            "countertop", "countertop edge",
            "rack"
        ];

        const applianceKeywords = [
            "appliance", "appliances",
            "toaster", "microwave", "oven",
            "blender", "rice cooker",
            "coffee maker", "electric kettle",
            "dishwasher",
            "refrigerator", "fridge", "ref"
        ];

        if (matchKeyword(term, potsKeywords)) {
            window.location.href = "pots.html";
        }
        else if (matchKeyword(term, dishesKeywords)) {
            window.location.href = "dishes.html";
        }
        else if (matchKeyword(term, sinkKeywords)) {
            window.location.href = "sink.html";
        }
        else if (matchKeyword(term, applianceKeywords)) {
            window.location.href = "appliances.html";
        }
        else {
            alert("No matching category found.");
        }
    });
});
