import "../../style.css";
import "../style/footer.css";

document.querySelector("#footer").innerHTML = `
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-content-div">
            <p class="footer-content-h">Contacts</p>
            <a href="#">Trev Koni</a>
            <br />
            <a href="#">Kristi Kule</a>
            <br />
            <a href="#">Send an Email</a>
            <br />
            <a href="https://discord.gg/SC3yy7bq">Discord</a>
          </div>
          <div class="footer-content-div">
            <p class="footer-content-h">Pages</p>
            <a href="/">Home</a>
            <br />
            <a href="./recipes.html">Recipes</a>
            <br />
            <a href="./categories.html">Categories</a>
            <br />
            <a href="./about.html">About</a>
          </div>
        </div>
        <img src="/malevolent-kitchen.png" alt="Site Logo" class="footer-img" />
      </div>
`;
