import "../../style.css";
import "../style/navbar.css";

document.querySelector("#navbar").innerHTML = `
  <div class="nav-container">
    <a href="/" class="nav-link">Home</a>
    <a href="./recipes" class="nav-link">Recipes</a>
      <div class="dropdown">
        <button class="dropbtn">Categories
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
      </div>
      
    <a href="./about" class="nav-link">About</a>
    <a href="./contact" class="nav-link">Contact</a>
  </div>
`;
