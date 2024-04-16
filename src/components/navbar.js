import "../../style.css";
import "../style/navbar.css";

document.querySelector("#navbar").innerHTML = `
  <div class="nav-container">
    <a href="/" class="nav-link">Home</a>
    <a href="./recipes" class="nav-link">Recipes</a>
    <a href="./categories" class="nav-link">Categories</a>
    <a href="./about" class="nav-link">About</a>
    <a href="./contact" class="nav-link">Contact</a>
  </div>
`;
