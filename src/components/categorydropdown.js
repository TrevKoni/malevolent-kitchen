import "../../style.css";
import "../style/recipecard.css";
import recipesData from "../data/recipes.json";

// Empty array to store unique categories
let categoriesList = [];

// Loop through recipes data
recipesData.recipes.forEach(recipe => {
    // Check if the category is already in the categories array
    if (!categoriesList.includes(recipe.category)) {
        // If not, add it to the categories array
        categoriesList.push(recipe.category);
    }
});

// Function to create dropdown list
function createDropdown(categories) {
    // Create select element
    let select = document.createElement("select");
    select.setAttribute("id", "categorySelect");

    // Create default option
    let defaultOption = document.createElement("option");
    defaultOption.text = "Select a category";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    // Create options for each category
    categories.forEach(category => {
        let option = document.createElement("option");
        option.text = category;
        option.value = category;
        select.appendChild(option);
    });

    // Add change event listener to select element
    select.addEventListener("change", function() {
        let selectedCategory = this.value;
        // Call function to filter recipes based on selected category
        filterRecipes(selectedCategory);
    });

    return select;
}

// Function to add categories dropdown to navbar
function addCategoriesDropdown(categories) {
    let navbarContainer = document.querySelector("#navbar .nav-container");

    // Create dropdown list
    let dropdown = createDropdown(categories);

    // Append dropdown to navbar container
    navbarContainer.appendChild(dropdown);
}

// Call function to add categories dropdown to navbar
addCategoriesDropdown(categoriesList);

// Add navbar links
document.querySelector("#navbar .nav-container").innerHTML += `
  <a href="/" class="nav-link">Home</a>
  <a href="./recipes" class="nav-link">Recipes</a>
  <a href="./about" class="nav-link">About</a>
  <a href="./contact" class="nav-link">Contact</a>
`;
