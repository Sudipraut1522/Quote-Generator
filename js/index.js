const darkModeButton = document.getElementById("dark-mode-toggle");
let darkMode = false;

darkModeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

