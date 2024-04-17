import "../../style.css";
import "../style/recipecard.css";
import recipesData from "../data/recipes.json";

// Check if recipesData contains the expected structure
console.log(recipesData);

// Function to set a cookie
const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
  document.cookie = `${name}=${cookieValue}; path=/`;
};

// Function to get a cookie value by name
const getCookie = (name) => {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
};


// Function to handle category filtering based on the cookie value
const handleCategoryFiltering = () => {
  const selectedCategory = getCookie('selectedCategory');
  if (selectedCategory) {
    // Filter recipes based on the category stored in the cookie
    const filteredRecipes = filterRecipesByCategory(selectedCategory);
    // Generate recipe cards for the filtered recipes
    const recipeCardsHTML = generateRecipeCards(filteredRecipes);
    // Display the recipe cards
    document.querySelector("#all-category-cards").innerHTML = recipeCardsHTML;
  } else {
    // Handle case when no category is stored in the cookie
    console.log("No category selected.");
  }
};

// Call handleCategoryFiltering on page load to filter recipes based on the stored category
window.addEventListener('load', handleCategoryFiltering);


const generateRecipeCards = (recipes) => {
  // Ensure recipes is an array
  if (Array.isArray(recipes)) {
    // Map through the array of recipes to generate recipe cards
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
  } else {
    console.error("Recipes is not an array.");
    return ""; // Return an empty string if recipes is not an array
  }
};