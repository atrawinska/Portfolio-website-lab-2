
const themeButtons = document.querySelectorAll(".theme-btn");

function applyTheme(themeName) {

  document.body.classList.remove("dark-theme", "blue-theme");


  if (themeName !== "light") {
    document.body.classList.add(`${themeName}-theme`);
  }

  themeButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === themeName);
  });

  document.cookie = `theme=${themeName}; max-age=${60*60*24*30}; path=/`;
}


themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const cookieMatch = document.cookie.match(/theme=(\w+)/);
  const savedTheme = cookieMatch ? cookieMatch[1] : "light";
  applyTheme(savedTheme);
});
