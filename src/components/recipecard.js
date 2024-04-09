import "../../style.css";
import "../style/recipecard.css";

document.querySelector("#recipecard").innerHTML = `

    <div class="recipe">
        <div class="recipe-title">
            <h2>Top Recipes</h2>
        </div>

        <div class="recipe-container">
            <div class="recipe-card-container-1">
                <div class="recipe-card">
                    <img>
                    <h3 class="recipe-card-heading">Embelsira</h3>
                    <p class="recipe-card-body">Lorum etc etc</p>
                </div>
            </div>

            <div class="recipe-card-container-2">
                <div class="recipe-card">
                    <img>
                    <h3 class="recipe-card-heading">Embelsira</h3>
                    <p class="recipe-card-body">Lorum etc etc</p>      
                </div>
            </div>

            <div class="recipe-card-container-3">
                <div class="recipe-card">
                    <img>
                    <h3 class="recipe-card-heading">Embelsira</h3>
                    <p class="recipe-card-body">Lorum etc etc</p>
                </div>
            </div>
        </div>
    </div>
`;


