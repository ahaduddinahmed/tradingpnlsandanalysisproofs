// You can add your proofs here (image or PDF paths)
const proofs = [
    {
      file: "proofs/jan2025.png",
      title: "January 2025 PnL",
      description: "+12% — EUR/USD & Gold swing trades"
    },
    {
      file: "proofs/feb2025.png",
      title: "February 2025 PnL",
      description: "+9% — London session intraday"
    },
    {
      file: "proofs/march2025.pdf",
      title: "March 2025 Detailed Report (PDF)",
      description: "Full breakdown with risk metrics"
    }
  ];
  
  const gallery = document.getElementById("proofGallery");
  
  proofs.forEach(proof => {
    const card = document.createElement("div");
    card.className = "proof-card";
  
    if (proof.file.endsWith(".pdf")) {
      card.innerHTML = `
        <div class="proof-info">
          <h4>${proof.title}</h4>
          <p>${proof.description}</p>
          <a href="${proof.file}" target="_blank" style="color:#38bdf8;text-decoration:none;">View PDF</a>
        </div>
      `;
    } else {
      card.innerHTML = `
        <img src="${proof.file}" alt="${proof.title}">
        <div class="proof-info">
          <h4>${proof.title}</h4>
          <p>${proof.description}</p>
        </div>
      `;
    }
  
    gallery.appendChild(card);
  });
  