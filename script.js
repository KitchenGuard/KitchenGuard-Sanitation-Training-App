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
class KitchenSearch {
    constructor(searchInputId, searchBtnId) {
        this.searchInput = document.getElementById(searchInputId);
        this.searchBtn = document.getElementById(searchBtnId);

        this.keywordMap = {
            pots: [
                "pot", "pots", "stockpot", "stock pot",
                "saucepan", "sauce pan", "pan", "pans",
                "kawali", "wok",
                "dutch", "oven", "dutch oven",
                "casserole",
                "saute", "saute pan"
            ],
            dishes: [
                "dish", "dishes", "plate", "plates",
                "bowl", "bowls",
                "utensil", "utensils",
                "knife", "knives",
                "cup", "cups",
                "glass", "glasses",
                "chopping board", "chopping boards"
            ],
            sink: [
                "sink", "lavabo",
                "faucet", "drain", "strainer",
                "countertop", "countertop edge",
                "rack"
            ],
            appliances: [
                "appliance", "appliances",
                "toaster", "microwave", "oven",
                "blender", "rice cooker",
                "coffee maker", "electric kettle",
                "dishwasher",
                "refrigerator", "fridge", "ref"
            ]
        };

        this.pageMap = {
            pots: "pots.html",
            dishes: "dishes.html",
            sink: "sink.html",
            appliances: "appliances.html"
        };

        this.init();
    }

    init() {
        if (!this.searchInput || !this.searchBtn) {
            console.error("Search input or button missing.");
            return;
        }

        this.searchBtn.addEventListener("click", () => this.handleSearch());
    }

    matchKeyword(term, keywords) {
        return keywords.some(k => {
            k = k.toLowerCase();
            return k.includes(term) || term.includes(k);
        });
    }

    handleSearch() {
        const term = this.searchInput.value.trim().toLowerCase();

        if (!term) {
            alert("Please type something to search.");
            return;
        }

        for (let category in this.keywordMap) {
            if (this.matchKeyword(term, this.keywordMap[category])) {
                window.location.href = this.pageMap[category];
                return;
            }
        }

        alert("No matching category found.");
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    new KitchenSearch("searchInput", "searchBtn");
});
