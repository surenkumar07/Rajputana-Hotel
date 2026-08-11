const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => header.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => header.classList.remove("open"));
});

const date = document.getElementById("date");
const now = new Date();
date.min = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;

const form = document.getElementById("bookingForm");

// Replace this with the restaurant's verified WhatsApp Business number.
const WHATSAPP_NUMBER = "919036209102";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dateValue = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const occasion = document.getElementById("occasion").value;
  const note = document.getElementById("note").value.trim();

  const readableDate = new Date(`${dateValue}T00:00:00`).toLocaleDateString("en-IN", {
    day:"numeric", month:"long", year:"numeric"
  });

  const message =
`Namaste Rajputana! 🙏

I'd like to reserve a table.

*Name:* ${name}
*Phone:* ${phone}
*Date:* ${readableDate}
*Time:* ${time}
*Guests:* ${guests}
*Occasion:* ${occasion}
${note ? `*Special request:* ${note}` : ""}

Please confirm availability. Thank you!`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
