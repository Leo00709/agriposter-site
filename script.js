document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("a[href*='exemplo-paysuite.com']");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Redirecionando para checkout hosted.");
    });
  });
});