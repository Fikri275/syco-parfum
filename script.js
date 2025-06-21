document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  nav.scrollBy({
    left: 200,
    behavior: "smooth"
  });
});
