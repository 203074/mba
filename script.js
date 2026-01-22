function selectProduct(name) {
  document.getElementById("product").value = name;
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}
