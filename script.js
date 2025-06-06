// Generate a random 16-bit number
const targetNumber = Math.floor(Math.random() * 65536);
const targetBinary = targetNumber.toString(2).padStart(16, '0');

function makeGuess() {
  const guess = document.getElementById("guess").value.trim();
  const result = document.getElementById("result");

  if (!/^[01]{16}$/.test(guess)) {
    result.textContent = "❌ Please enter a valid 16-bit binary number.";
    return;
  }

  if (guess === targetBinary) {
    result.textContent = "✅ Teleporting...";
    setTimeout(() => {
      // Replace this with your actual Google Doc link
      window.location.href = "https://docs.google.com/document/d/163XZiFtZR2AO9ANo-Pu4eREjPZqdM9V8XCFd7x9Pruo/edit?tab=t.0";
    }, 1000);
  } else {
    result.textContent = "❌ Incorrect. Try again.";
  }
}

// Add Enter key support
document.getElementById("guess").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    makeGuess();
  }
});
