const targetNumber = Math.floor(Math.random() * 65536);
const targetBinary = targetNumber.toString(2).padStart(16, '0');

function makeGuess() {
  const guess = document.getElementById("guess").value.trim();
  const result = document.getElementById("result");

  if (!/^[01]{16}$/.test(guess)) {
    result.textContent = "by any chance are you autistic?";
    return;
  }

  if (guess === targetBinary) {
    result.textContent = "took you long enough dumbass";
    setTimeout(() => {
      window.location.href = "https://docs.google.com/document/d/163XZiFtZR2AO9ANo-Pu4eREjPZqdM9V8XCFd7x9Pruo/edit?tab=t.0";
    }, 1000);
  } else {
    result.textContent = "stupid";
  }
}

// Trigger guess when button is clicked
document.getElementById("guessBtn").addEventListener("click", makeGuess);

// Trigger guess when Enter is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    makeGuess();
  }
});

