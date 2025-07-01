# Digipixel-Quote-Generator
# Internal Website Quote Generator

This is a web-based tool built to generate quotes based on selected website features.

## 👨‍💼 How to Use

1. Enter the client's name
2. Select features they require
3. Total is calculated automatically
4. Click "Generate PDF Quote" to download a quote

## 🛠️ To Run Locally

Open `index.html` in any web browser.

## 📦 Built With

- HTML, Tailwind CSS
- Vanilla JavaScript
- jsPDF (for PDF download)

## 🧾 Add/Edit Features

In `index.html`, look for the section inside the form:
```html
<input type="checkbox" class="feature" data-name="..." data-price="..." />



<script>
    
    const correctOTP = "123456";

    document.getElementById("otpForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const enteredOTP = document.getElementById("otpInput").value.trim();

      if (enteredOTP === correctOTP) {
        alert("OTP verified! Please login now.");
        window.location.href = "login.html";
      } else {
        alert("Incorrect OTP, please try again.");
      }
    });
  </script>
