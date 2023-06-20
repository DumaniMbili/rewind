var images = [
  "../images/gallery/rewind/sip-and-paint/DSC_8137.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8141.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8142.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8150.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8162.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8169.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8173.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8183.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8211.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8214.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8241.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8248-2.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8248.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8250.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8267.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8288.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8349.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8350.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8354.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8355.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8356.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8357.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8358.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8359.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8360.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8361.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8363.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8364.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8365.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8366.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8367.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8368.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8369.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8370.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8371.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8372.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8373.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8374.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8376.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8377.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8378.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8380.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8381.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8385.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8387.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8389.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8390.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8391.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8392.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8393.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8394.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8395.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8401.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8406.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8420.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8430.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8431.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8443.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8446.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8451.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8457.jpg",
  "../images/gallery/rewind/sip-and-paint/DSC_8461.jpg",
];

var currentIndex = 0;

function openFullImg(src) {
  document.getElementById("fullImg").src = src;
  document.getElementById("fullImgBox").style.display = "flex";
  currentIndex = images.indexOf(src);
}

function closeFullImg() {
  document.getElementById("fullImgBox").style.display = "none";
}

function slideImage(n) {
  currentIndex += n;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById("fullImg").src = images[currentIndex];
}
