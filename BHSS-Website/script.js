document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.classList.remove('dark', 'light');
  body.classList.add(savedTheme);
  toggleButton.textContent = savedTheme === 'light' ? '🌙' : '☀️';

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const newTheme = body.classList.contains('light') ? 'light' : 'dark';
    toggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
  });
});
// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");
const body = document.body;

// Load theme preference
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  
  icon.classList.toggle("fa-moon", !isLight);
  icon.classList.toggle("fa-sun", isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

