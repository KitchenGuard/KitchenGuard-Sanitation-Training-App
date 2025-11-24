// Get all pot buttons
const potButtons = document.querySelectorAll(".pot-btn");

potButtons.forEach(button => {
  button.addEventListener("click", () => {

    const content = button.nextElementSibling; // the corresponding .pot-content

    // Close other opened contents (optional)
    document.querySelectorAll(".pot-content").forEach(section => {
      if (section !== content) {
        section.style.display = "none";
      }
    });

    // Toggle the clicked one
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
