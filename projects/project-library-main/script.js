/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const recipes = [
  {
    name: 'Individual vegetarian lasagnes',
    cuisineType: ['italian'],
    ingredients: [
      '1.2 kg cherry tomatoes',
      '5 sprigs of fresh thyme',
      'extra virgin olive oil',
      '2 shallots',
      '2 cloves of garlic',
      '500 g baby spinach',
      '8-12 fresh or dried lasagne sheets',
      '350 g ricotta cheese',
      'WHITE SAUCE',
      '600 ml milk',
      '25 g unsalted butter',
      '2 heaped tablespoons flour',
      '150 g vegetarian sharp, mature cheese',
      '100 g mozzarella'
    ],
    source: 'Jamie Oliver',
    totalTime: 130,
    url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
    image: './recipe-images/individual-vegetarian-lasagnes.jpg'
  },
  {
    name: 'Vegetarian Stir-Fried Garlic Scape',
    cuisineType: ['Balanced'],
    ingredients: [
      '8 oz. garlic scapes',
      '3 oz. baby corn',
      '3 oz. carrots',
      '1 oz. dried shiitake mushrooms',
      '1 clove of garlic sliced thinly',
      '3 slices of fresh ginger root',
      '2 tablespoons vegetable oil',
      '1/4 cup shaoxing cooking wine',
      '1/4 vegetarian stock or water',
      '1 tablespoon light soy sauce',
      '1 teaspoon sugar',
      '1 teaspoon cornstarch',
      '1/4 teaspoon ground white pepper'
    ],
    source: 'Red Cook',
    totalTime: null,
    url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
    image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
  },
  {
    name: 'Cheat’s cheesy focaccia',
    cuisineType: ['Italian'],
    ingredients: [
      '500g pack bread mix',
      '2 tbsp olive oil , plus a little extra for drizzling',
      '25g parmesan (or vegetarian alternative), grated',
      '75g dolcelatte cheese (or vegetarian alternative)'
    ],
    source: 'BBC Good Food',
    totalTime: 40,
    url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
    image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ['Balanced', 'High-Fiber'],
    ingredients: [
      '2 tablespoons extra-virgin olive oil',
      '1 large onion, finely diced',
      '2 carrots, peeled and thinly sliced',
      '2 celery stalks, thinly sliced',
      '10 ounces cremini mushrooms, trimmed and sliced',
      '1 tablespoon tomato paste',
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      '1 dried bay leaf',
      '1 cup French green lentils, picked over',
      'Kosher salt and freshly ground pepper',
      '1 cup frozen peas',
      '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
      '4 cloves garlic',
      '4 tablespoons unsalted butter',
      '1/2 cup whole milk, warmed'
    ],
    source: 'Martha Stewart',
    totalTime: 120,
    url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
  },
  {
    name: 'Chicken Paprikash',
    cuisineType: ['Low-Carb'],
    ingredients: [
      '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 tablespoon butter – cultured unsalted (or olive oil)',
      '240 grams onion sliced thin (1 large onion)',
      '70 grams Anaheim pepper chopped (1 large pepper)',
      '25 grams paprika (about 1/4 cup)',
      '1 cup chicken stock',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1 tablespoon flour – all-purpose'
    ],
    source: 'No Recipes',
    totalTime: 80,
    url: 'http://norecipes.com/recipe/chicken-paprikash/',
    image: './recipe-images/chicken-paprikash.jpg'
  },
  {
    name: 'Baked Chicken',
    cuisineType: ['american'],
    ingredients: [
      '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
      '1/2 teaspoon coarse salt',
      '1/2 teaspoon Mrs. Dash seasoning',
      '1/4 teaspoon freshly ground black pepper'
    ],
    source: 'Martha Stewart',
    totalTime: 90,
    url: 'http://www.marthastewart.com/318981/baked-chicken',
    image: './recipe-images/baked-chicken.jpg'
  },
  {
    name: 'Deep Fried Fish Bones',
    cuisineType: ['south east asian'],
    ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
    source: 'Serious Eats',
    totalTime: 31,
    url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
    image: './recipe-images/deep-fried-fish-bones.jpg'
  },
  {
    name: 'Burnt-Scallion Fish',
    cuisineType: ['chinese'],
    ingredients: [
      '2 bunches scallions',
      '8 tbsp. butter',
      '2 8-oz. fish filets'
    ],
    source: 'Saveur',
    totalTime: 70,
    url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Curry-Crusted Fish',
    cuisineType: ['south east asian'],
    ingredients: [
      '3 slices bread , about 85g/3oz in total',
      '1 lime',
      '1.0 tbsp Korma curry paste',
      '4 thick white fish fillets'
    ],
    source: 'BBC Good Food',
    totalTime: 80,
    url: 'http://www.bbcgoodfood.com/recipes/4717/',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Meat Stock',
    cuisineType: 'american',
    ingredients: [
      '2.5 pounds beef marrow bones',
      '1 large onion, quartered',
      '2 carrots, sliced',
      '1 leek, cleaned and sliced',
      '2 celery stalks, sliced',
      '2.5 pounds organic beef stew meat, cubed',
      '2 tablespoons tomato paste',
      '5 cloves garlic',
      '2 bay leaves',
      '3 sprigs thyme',
      '3 sprigs Italian parsley',
      '1/2 teaspoon black peppercorns'
    ],
    source: 'Food52',
    totalTime: 60,
    url: 'https://food52.com/recipes/3712-meat-stock',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Homemade Meat Broth',
    cuisineType: 'american',
    ingredients: [
      '1 teaspoon salt',
      '1 carrot, peeled',
      '1 medium onion, peeled',
      '2 or 3 celery stalks',
      '¼ red or yellow bell pepper, stripped of all its seeds',
      '1 small boiling potato, peeled',
      '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
      '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
    ],
    source: 'Cookstr',
    totalTime: 60,
    url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
    cuisineType: 'south-american',
    ingredients: [
      '1 tablespoon whole black peppercorns, toasted',
      '1 teaspoon coriander seed, toasted',
      '1 teaspoon fennel seed, toasted',
      '1 teaspoon cumin pods, toasted',
      '1 teaspoon red pepper flakes',
      '1/2 teaspoon dried oregano',
      '2 medium cloves garlic, minced (about 2 teaspoons)',
      '2 tablespoons vegetable or canola oil',
      '1 whole flap meat steak, 2 to 2 1/2 pounds',
      'Kosher salt'
    ],
    source: 'Serious Eats',
    totalTime: 240,
    url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
    image: './recipe-images/grilled.jpg'
  }
];

const recipesWrapper = document.getElementById("recipes");
const filterSelection = document.getElementById("filters");
const sortIngredientsBtn = document.getElementById("sortIngredientsBtn");
const sortTimeBtn = document.getElementById("sortTimeBtn");
const cookBtn = document.getElementById("cookBtn");

const convertCuisineTypes = (recipes) => {
  return recipes.map((recipe) => {
    if (typeof recipe.cuisineType === 'string') {
      recipe.cuisineType = [recipe.cuisineType];
    }
    recipe.cuisineType = recipe.cuisineType.map((item) => item.toLowerCase());
    return recipe;
  });
};
const convertedRecipes = convertCuisineTypes(recipes);
// console.log(convertedRecipes);

const convertTime = (totalTime) => {
  const hours = Math.floor(totalTime / 60);
  const minutes = totalTime % 60;

  if (totalTime === null) {
    return ("")
  } else if (hours === 0) {
    return `${minutes} min`
  } else if (minutes === 0) {
    return `${hours} h`
  } else {
    return `${hours} h ${minutes} min`
  }
  ;
}

//Load recipes

const renderRecipes = (convertedRecipes) => {
  recipesWrapper.innerHTML = "";

  convertedRecipes.map((recipe) => {
    const { name, cuisineType, ingredients, source, totalTime, url, image } = recipe;

    recipesWrapper.innerHTML += `
    <div class="recipe-card">
      <h2>${name}</h2>
      <img class="recipe-image" src="${image}" alt="${name}">
      <div class="recipe-info">
        ${cuisineType.map((type) => `<h3>${type}</h3>`).join('')}
        <h3 class="recipe-time">${convertTime(totalTime)}</h3>
      </div>
      <ul>
      ${ingredients.map((ingredientItem) => `<li>${ingredientItem}</li>`
    ).join("")}
      </ul>
      <a class="align-bottom" href="${url}" target="_blank">${source}</a>
    </div>
  `
  })
}

const loadFilterSelection = () => {
  cuisineTypesFilterList = [];

  filterSelection.innerHTML += `<option value="all">all</option>`;

  convertedRecipes.forEach((recipe) => {
    //for each cuisine type
    recipe.cuisineType.forEach((cuisine) => {
      //If the cuisine type is not already included in the cuisineTypes-array...
      if (!cuisineTypesFilterList.includes(cuisine)) {
        //...then add (push) it to the array.
        cuisineTypesFilterList.push(cuisine);
        //display the cuisineTypes array as options
        filterSelection.innerHTML += `<option value="${cuisine}">${cuisine}</option>`;
      }
    });
  });
}

const filterRecipes = () => {
  const selectedCuisine = filterSelection.value;
  if (selectedCuisine === "all") {
    console.log("Rendering all recipes");
    renderRecipes(convertedRecipes);
  } else {
    const filteredRecipes = convertedRecipes.filter((recipe) => recipe.cuisineType.includes(selectedCuisine));
    renderRecipes(filteredRecipes);
  }
};

loadFilterSelection();
filterSelection.addEventListener("change", filterRecipes);


// Sort on Number of Ingredients
const sortNumberOfIngredients = () => {
  if (sortIngredientsBtn.innerHTML === "Least Ingredients") {
    sortIngredientsBtn.innerHTML = "Most Ingredients";
    convertedRecipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
    renderRecipes(convertedRecipes)
  } else {
    sortIngredientsBtn.innerHTML = "Least Ingredients";
    convertedRecipes.sort((a, b) => b.ingredients.length - a.ingredients.length);
    renderRecipes(convertedRecipes)
  }
}
sortIngredientsBtn.addEventListener("click", sortNumberOfIngredients);

// Sort on Cooking Time
const sortCookingTime = () => {
  if (sortTimeBtn.innerHTML === "Shortest Time") {
    sortTimeBtn.innerHTML = "Longest Time";
    convertedRecipes.sort((a, b) => a.totalTime - b.totalTime);
    renderRecipes(convertedRecipes)
  } else {
    sortTimeBtn.innerHTML = "Shortest Time";
    convertedRecipes.sort((a, b) => b.totalTime - a.totalTime);
    renderRecipes(convertedRecipes)
  }
}
sortTimeBtn.addEventListener("click", sortCookingTime);

const randomizeRecipe = (convertedRecipes) => {
  const randomRecipeIndex = Math.floor(Math.random() * convertedRecipes.length);
  const randomRecipe = convertedRecipes[randomRecipeIndex];
  renderRecipes([randomRecipe]);
}

cookBtn.addEventListener("click", () => randomizeRecipe(convertedRecipes));

renderRecipes(convertedRecipes);






