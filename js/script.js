hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};



const phoneNumber = "+27765564827";


const defaultMessage = "Hello, what would you love to know about Rewind?";

const whatsappBot = document.querySelector(".whatsapp-bot");

whatsappBot.addEventListener("click", () => {
    // Open WhatsApp chat when the bot is clicked
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`);
});
