function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

(function () {
  emailjs.init("Dy3uT4S-kkuShx-XR"); // Replace "your_user_id" with your EmailJS user ID
})();

function sendMessage() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
      from_name: firstName + " " + lastName,
      to_email: "jj446708@gmail.com",
      from_email: email,
      message_html: message
  };

  emailjs.send('service_5w5oilp', 'template_1oblyhd', templateParams)
      .then(function () {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
      }, function (error) {
          console.error('Failed to send email. Error: ', error);
      });
}