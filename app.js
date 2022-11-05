const menu = document.getElementById("menu")
const menuLinks = document.getElementById("menu-links")

menu.onclick = () => {
  if (menuLinks.style.display === "none") {
    menuLinks.style.display = "block"
  } else {
    menuLinks.style.display = "none"
  }
}
