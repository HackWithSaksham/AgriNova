// Data (you can later replace this with dynamic data from an API)
const farmers = [
  {
    id: 1,
    name: "Ajay",
    location: "Haryana, India",
    crops: "Wheat, Rice, Bajra",
    storyline: "Breakdown of irrigation system, crops destruction, cold storages due to heavy thunderstorm.",
    needs: ["Support irrigation system", "Fund crop insurance", "Sponsor storage facilities", "Organic fertilisers"]
  },
  {
    id: 2,
    name: "Suman",
    location: "Punjab, India",
    crops: "Wheat, Maize",
    storyline: "Flooding destroyed a large portion of the field; cold storage unavailable.",
    needs: ["Sponsor storage facilities", "Provide seeds", "Micro-loan assistance"]
  },
  {
    id: 3,
    name: "Meera",
    location: "Rajasthan, India",
    crops: "Bajra, Millet",
    storyline: "Irrigation canal got blocked; urgent repair required.",
    needs: ["Support irrigation system", "Organic fertilisers"]
  }
];

// Build farmer card markup and append into DOM
function createFarmerCard(f) {
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 md:grid-cols-12 gap-4 items-start";

  container.innerHTML = `
    <div class="md:col-span-2 flex items-start gap-4">
      <div class="avatar">${f.name[0]}</div>
      <div>
        <h4 class="font-bold text-lg">${f.name}</h4>
        <div class="text-sm text-gray-500">${f.location}</div>
        <div class="mt-3 font-semibold">Crops grown</div>
        <div class="text-sm text-gray-600">${f.crops}</div>
      </div>
    </div>

    <div class="md:col-span-6 storyline text-sm text-gray-700">
      <div class="font-semibold mb-2">Storyline</div>
      <div>${escapeHtml(f.storyline)}</div>
    </div>

    <div class="md:col-span-4">
      <div class="font-semibold mb-2">Current need</div>
      <ul class="text-sm space-y-2 list-disc ml-5 text-gray-600">
        ${f.needs.map(n => `<li>${escapeHtml(n)} <span class="text-gray-400">›</span></li>`).join('')}
      </ul>
    </div>
    <div class="md:col-span-12 farmer-divider"></div>
  `;
  return container;
}

// Escape to prevent accidental HTML injection
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Render all farmers
function renderFarmers(list) {
  const wrap = document.getElementById('farmers-list');
  wrap.innerHTML = '';
  list.forEach(f => {
    wrap.appendChild(createFarmerCard(f));
  });
}

// Simple search filter (searches name, crops, location, storyline)
function filterFarmers(q) {
  q = q.trim().toLowerCase();
  if (!q) return farmers;
  return farmers.filter(f => {
    return (
      f.name.toLowerCase().includes(q) ||
      f.crops.toLowerCase().includes(q) ||
      f.location.toLowerCase().includes(q) ||
      f.storyline.toLowerCase().includes(q)
    );
  });
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
  // initially render
  renderFarmers(farmers);

  // Hook search inputs
  const topSearch = document.getElementById('top-search');
  const mobileSearch = document.getElementById('mobile-search');

  [topSearch, mobileSearch].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', (e) => {
      const q = e.target.value;
      renderFarmers(filterFarmers(q));
    });
  });

  // view all button (example redirect / show alert)
  document.getElementById('view-all').addEventListener('click', () => {
    // replace with real behaviour (page or modal). For now simple example:
    alert('Would navigate to /farmers or load more results.');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".donation-btn");
  const customAmount = document.getElementById("customAmount");

  // Select donation amount
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customAmount.value = "";
    });
  });

  customAmount.addEventListener("input", () => {
    buttons.forEach(b => b.classList.remove("active"));
  });

  // Payment method selection
  const cardRadio = document.querySelector("input[value='card']");
  const upiRadio = document.querySelector("input[value='upi']");
  const cardDetails = document.getElementById("cardDetails");
  const upiDetails = document.getElementById("upiDetails");

  cardRadio.addEventListener("change", () => {
    cardDetails.classList.remove("hidden");
    upiDetails.classList.add("hidden");
  });

  upiRadio.addEventListener("change", () => {
    upiDetails.classList.remove("hidden");
    cardDetails.classList.add("hidden");
  });

  // Verify UPI
  document.getElementById("verifyUPI").addEventListener("click", () => {
    const upiId = document.getElementById("upiId").value.trim();
    if (upiId) {
      alert("UPI ID " + upiId + " verified successfully!");
    } else {
      alert("Please enter a valid UPI ID.");
    }
  });

  // Confirm Payment
  document.getElementById("confirmPayment").addEventListener("click", () => {
    let amount = customAmount.value || document.querySelector(".donation-btn.active")?.dataset.amount;
    if (!amount) {
      alert("Please select or enter a donation amount.");
      return;
    }

    let paymentMethod = document.querySelector("input[name='payment']:checked");
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert("Donation of ₹" + amount + " via " + paymentMethod.value + " confirmed. Thank you!");
  });
});
