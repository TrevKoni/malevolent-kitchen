import "../../style.css";
import "../style/recipecard.css";
import recipesData from "../data/recipes.json";

// Function to filter recipes by category
const filterRecipesByCategory = (category) => {
  return recipesData.recipes.filter(recipe => recipe.category === category);
};

// Function to generate recipe cards
const generateRecipeCards = (recipes) => {
  return recipes.map(
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
  ).join("");
};

// Get the category to display from an external source (e.g., user input)
const categoryToDisplay = getCategoryToDisplay(); // Implement this function to get the category

// Ensure recipesData.recipes is an array
if (Array.isArray(recipesData.recipes)) {
  // Filter recipes based on the category to display
  const filteredRecipes = filterRecipesByCategory(categoryToDisplay);

  if (filteredRecipes.length > 0) {
    // Generate recipe cards for the filtered recipes
    const recipeCardsHTML = generateRecipeCards(filteredRecipes);
    
    // Display the recipe cards
    document.querySelector("#all-category-cards").innerHTML = recipeCardsHTML;
  } else {
    // Display a message if no recipes found for the category
    document.querySelector("#all-category-cards").innerHTML = `<p>No recipes found for category "${categoryToDisplay}".</p>`;
  }
} else {
  console.error("recipesData.recipes is not an array.");
}
