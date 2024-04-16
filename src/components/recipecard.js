import "../../style.css";
import "../style/recipecard.css";
import recipesData from "../data/recipes.json";

// Check if recipesData contains the expected structure
console.log(recipesData);

// Ensure recipesData.recipes is an array
if (Array.isArray(recipesData.recipes)) {
  // Select the top 3 recipes
  const topRecipes = recipesData.recipes.slice(0, 3);

  // Map through the array of top recipes to generate recipe cards
  document.querySelector("#recipecard").innerHTML = topRecipes
    .map(
      (recipe) =>
        `
    <div class="recipe-card-container">
        <div class="recipe-card">
            <img src="${recipe.img}">
            <h3 class="recipe-card-heading">${recipe.name}</h3>
            <p class="recipe-card-body">${recipe.desc}</p>
        </div>
    </div>
    `,
    )
    .join("");
} else {
  console.error("recipesData.recipes is not an array.");
}
