function selectProduct(name) {
  document.getElementById("product").value = name;
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
