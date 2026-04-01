// TABS
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

// SMOOTH SCROLL
document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FORM MESSAGE
const form = document.getElementById("appointment-form");
const formMsg = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    formMsg.textContent = "Thank you! Your request has been received.";
    form.reset();
  });
}
