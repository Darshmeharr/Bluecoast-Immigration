// =========================
// TABS
// =========================
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});


// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll(".smooth-scroll").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// =========================
// DARK MODE (FIXED + SAVED)
// =========================
const toggle = document.getElementById("darkModeToggle");

if (toggle) {
  // Load saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggle.textContent = "🌙";
    }
  });
}


// =========================
// FORM MESSAGE (MAILTO FRIENDLY)
// =========================
const form = document.getElementById("appointment-form");
const formMsg = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", () => {
    if (formMsg) {
      formMsg.textContent = "Opening your email client...";
    }
  });
}
