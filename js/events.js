document.addEventListener("DOMContentLoaded", function () {
  const modalTriggers = document.querySelectorAll(".modal-trigger");

  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const modal = this.nextElementSibling;
      modal.style.display = "flex";
    });
  });

  const modals = document.querySelectorAll(".modal");

  modals.forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("modal-close")) {
        modal.style.display = "none";
      }
    });
  });

  const goToSocialsButton = document.querySelector(".go-to-socials");

  goToSocialsButton.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/sa_rewind/";
  });

  const goToGalleryButton = document.querySelector(".go-to-gallery");

  goToGalleryButton.addEventListener("click", function () {
    window.location.href = "../pages/gallery.html";
  });
});
