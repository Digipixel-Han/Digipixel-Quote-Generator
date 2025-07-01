// Ensure Firebase is already initialized in firebase-config.js
const auth = firebase.auth();

// 🔐 Handle LOGIN ONLY
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login successful:", user.email);
      alert("Login successful!");
      window.location.href = "QuoteGenerator.html"; // Redirect to main dashboard
    })
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
      alert("Login failed: " + error.message);
    });
});

