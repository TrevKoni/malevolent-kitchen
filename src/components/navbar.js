import "../../style.css";
import "../style/navbar.css";

document.querySelector("#navbar").innerHTML = `
  <div class="nav-container">
    <a href="/" class="nav-link">Home</a>
    <a href="./recipes.html" class="nav-link">Recipes</a>
    <a href="./categories.html" class="nav-link">Categories</a>
    <a href="./about.html" class="nav-link">About</a>
    <a href="./contact.html" class="nav-link">Contact</a>
  </div>
`;
