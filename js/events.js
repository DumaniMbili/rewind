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

  const goToSocialsButtons = document.querySelectorAll(".go-to-socials");

  goToSocialsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href =
        "https://linktr.ee/3wind?utm_source=linktree_admin_share";
    });
  });

  const goToGalleryButtons = document.querySelectorAll(".go-to-gallery");

  goToGalleryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "../pages/gallery.html";
    });
  });
});
