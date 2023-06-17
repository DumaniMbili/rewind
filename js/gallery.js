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