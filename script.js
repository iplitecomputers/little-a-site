// Change this ONE value to point every "Create Invitation" button to your Little Invites app.
// Relative path (admin.html sits next to index.html):   "admin.html"
// Or a full URL (app hosted elsewhere):                  "https://invites.yourdomain.com/admin.html"
const LITTLE_INVITES_URL = "https://iplitecomputers.github.io/little-invites/admin.html";

document.querySelectorAll("[data-invites]").forEach(a => a.setAttribute("href", LITTLE_INVITES_URL));

const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); }
});
document.getElementById("year").textContent = new Date().getFullYear();
