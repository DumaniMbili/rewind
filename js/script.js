hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};


// Replace "YOUR_PHONE_NUMBER" with your actual phone number, including the country code
const phoneNumber = "0765564827";

// Replace "YOUR_DEFAULT_MESSAGE" with the default message you want to send
const defaultMessage = "Hello, what would you love to know about Rewind?";

const whatsappBot = document.querySelector(".whatsapp-bot");

whatsappBot.addEventListener("click", () => {
    // Open WhatsApp chat when the bot is clicked
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`);
});
