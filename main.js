import "./style.css";
import malevolentKitchen from "/malevolent-kitchen.png";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${malevolentKitchen}" class="logo" alt="Vite logo" />
    </a>
    <h1>Malevolent Kitchen!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
