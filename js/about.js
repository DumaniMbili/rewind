function handleScrollToAuthorBox() {
  const authorBox = document.querySelector(".about-author-box");
  const paragraph = authorBox.querySelector(".slide-in-right");
  const image = authorBox.querySelector(".author");

  if (isInViewport(authorBox)) {
    paragraph.classList.add("slide-in-visible");
    image.classList.add("slide-in-visible");
  }
}

function handleScrollToRewindBox() {
  const rewindBox = document.querySelector(".about-rewind-box");
  const paragraph = rewindBox.querySelector(".slide-in-left");
  const image = rewindBox.querySelector(".rewind");

  if (isInViewport(rewindBox)) {
    paragraph.classList.add("slide-in-visible");
    image.classList.add("slide-in-visible");
  }
}

window.addEventListener("scroll", handleScrollToAuthorBox);
window.addEventListener("scroll", handleScrollToRewindBox);

// Add this JavaScript code at the bottom of your "about.js" file

const images = document.querySelectorAll('.author, .rewind');

const fadeInImages = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
};

const imageObserver = new IntersectionObserver(fadeInImages, { threshold: 0.2 });

images.forEach((image) => {
  imageObserver.observe(image);
});
