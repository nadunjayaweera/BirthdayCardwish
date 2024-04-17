const overplay = document.querySelector(".overplay");
const avatarBtn = document.querySelector(".avatar img");

avatarBtn.onclick = function () {
  overplay.style.display = "flex";
  typeMessages();
};

function typeMessages() {
  const message1 = document.querySelectorAll(".wish p")[0];
  const message2 = document.querySelectorAll(".wish p")[1];

  const speed = 50; // Adjust typing speed here

  let messageText1 =
    "Thank you for always being there for me, through thick and thin. You've taught me so much about life, and I'm so grateful for your guidance and support.";
  let messageText2 =
    "As you celebrate another year of life, I wish you nothing but the best. May your days be filled with joy, laughter, and all the things that make you happy.";

  let j = 0;
  let k = 0;

  function typeMessage1() {
    if (j < messageText1.length) {
      if (messageText1.charAt(j) === ".") {
        message1.innerHTML += "<br>";
      } else {
        message1.innerHTML += messageText1.charAt(j);
      }
      j++;
      setTimeout(typeMessage1, speed);
    }
  }

  function typeMessage2() {
    if (k < messageText2.length) {
      if (messageText2.charAt(k) === ".") {
        message2.innerHTML += "<br>";
      } else {
        message2.innerHTML += messageText2.charAt(k);
      }
      k++;
      setTimeout(typeMessage2, speed);
    }
  }

  setTimeout(typeMessage1, speed);
  setTimeout(typeMessage2, messageText1.length * speed + speed); // Adjust the timeout for the second message
}

window.onclick = function (e) {
  if (e.target.classList.contains("overplay")) {
    overplay.style.display = "none";
  }
};
