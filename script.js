const features = document.querySelectorAll('.feature');
const totalDisplay = document.getElementById('totalAmount');
const generatePDFBtn = document.getElementById('generatePDF');
const clientNameInput = document.getElementById('clientName');

function calculateTotal() {
  let total = 0;
  features.forEach(feature => {
    if (feature.checked) {
      total += parseFloat(feature.dataset.price);
    }
  });
  totalDisplay.textContent = total.toFixed(2);
}

features.forEach(feature => {
  feature.addEventListener('change', calculateTotal);
});

generatePDFBtn.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const clientName = clientNameInput.value.trim();
  if (!clientName) {
    alert("Please enter the client's name.");
    return;
  }

  let y = 20;
  doc.setFontSize(16);
  doc.text(`Website Quote for ${clientName}`, 10, y);
  y += 10;

  doc.setFontSize(12);
  features.forEach(feature => {
    if (feature.checked) {
      const name = feature.dataset.name;
      const price = feature.dataset.price;
      doc.text(`✔ ${name} - $${price}`, 10, y);
      y += 8;
    }
  });

  y += 5;
  doc.setFontSize(14);
  doc.text(`Total: $${totalDisplay.textContent}`, 10, y);

  doc.save(`${clientName}_Quote.pdf`);
});
