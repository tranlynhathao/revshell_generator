const themeSelector = $("#theme-selector");

window.addEventListener("load", () => {
  if (themeSelector) {
    initTheme();
    themeSelector.on("change", (event) => resetTheme(event.target.value));
  }
});

/**
 * Initialize the theme based on localStorage.
 */
const initTheme = () => {
  const currentTheme = localStorage.getItem("currentTheme");

  if (!currentTheme) {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", currentTheme);
    $("#theme-selector").val(currentTheme).change();
  }
};

/**
 * Reset theme and update localStorage.
 * @param {string} currentTheme
 */
const resetTheme = (currentTheme) => {
  if (currentTheme !== "dark") {
    document.body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("currentTheme", currentTheme);
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("currentTheme");
  }
};
