var images = [
  "../images/gallery/rewind/image01.png",
  "../images/gallery/rewind/image02.png",
  "../images/gallery/rewind/image03.png",
  "../images/gallery/rewind/image04.png",
  "../images/gallery/rewind/image05.png",
  "../images/gallery/rewind/image06.png",
  "../images/gallery/rewind/image07.png",
  "../images/gallery/rewind/image08.png",
  "../images/gallery/rewind/image09.png",
  "../images/gallery/rewind/image10.png",
  "../images/gallery/rewind/image11.png",
  "../images/gallery/rewind/image12.png",
  "../images/gallery/rewind/image13.png",
  "../images/gallery/rewind/image14.png",
  "../images/gallery/rewind/image15.png",
  "../images/gallery/rewind/image16.png"
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
        currentIndex = images.length -1; 
    }
    else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("fullImg").src = images[currentIndex]; 
}