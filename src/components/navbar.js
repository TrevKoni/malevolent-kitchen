import "../../style.css";
import "../style/navbar.css";

document.querySelector("#navbar").innerHTML = `
  <div class="nav-container">
    <a href="/" class="nav-link">Home</a>
    <a href="./recipes" class="nav-link">Recipes</a>
      <div class="dropdown">
          <button class="dropbtn" id="category-select">Categories
            <i class="fa fa-caret-down"></i>
          </button>
        <div class="dropdown-content">
          <a href="./categories">Biscuits</a>
          <a href="./categories">Cakes</a>
          <a href="./categories">Candy</a>
          <a href="./categories">Cookies</a>
          <a href="./categories">Frozen</a>
          <a href="./categories">Pastries</a>
          <a href="./categories">Puddings</a>
        </div>
      </div>
      
    <a href="./about" class="nav-link">About</a>
    <a href="./contact" class="nav-link">Contact</a>
  </div>
`;
