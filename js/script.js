hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};


// Replace "YOUR_PHONE_NUMBER" with your actual phone number, including the country code
const phoneNumber = "076 556 4827";

// Replace "YOUR_DEFAULT_MESSAGE" with the default message you want to send
const defaultMessage = "Please feel free to give us a chat if you want to know anything 'Rewind'. ";

const whatsappBot = document.querySelector(".whatsapp-bot");

whatsappBot.addEventListener("click", () => {
    // Open WhatsApp chat when the bot is clicked
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`);
});
