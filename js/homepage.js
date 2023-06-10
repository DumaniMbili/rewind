function autoScroll() {
  const sectionIds = ["section1", "section2", "section3"]; // Replace with your section IDs
  let currentSectionIndex = 0;

  setInterval(() => {
    const sectionId = sectionIds[currentSectionIndex];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      currentSectionIndex++;

      if (currentSectionIndex >= sectionIds.length) {
        currentSectionIndex = 0;
      }
    }
  }, 5000); // Adjust the interval duration (in milliseconds) as desired
}

// Call the autoScroll function when the page finishes loading
window.addEventListener("load", autoScroll);
