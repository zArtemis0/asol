// Generate a random 16-bit number
const targetNumber = Math.floor(Math.random() * 65536);
const targetBinary = targetNumber.toString(2).padStart(16, '0');

function makeGuess() {
  const guess = document.getElementById("guess").value.trim();
  const result = document.getElementById("result");

  if (!/^[01]{16}$/.test(guess)) {
    result.textContent = "are you slow?";
    return;
  }

  if (guess === targetBinary) {
    result.textContent = "finally you dumbass";
    setTimeout(() => {
      // Replace with your Google Doc link
      window.location.href = "https://docs.google.com/document/d/your-doc-id-here";
    }, 1000);
  } else {
    result.textContent = "stupid";
  }
}

// Run makeGuess on button click
document.getElementById("guessBtn").addEventListener("click", makeGuess);

// Run makeGuess when Enter is pressed inside the input
document.getElementById("guess").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    makeGuess();
  }
});
