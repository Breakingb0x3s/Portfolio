let recipeList = [];
//Structure of recipe objects. recipeIngredients will work as follows, name of the ingredient, followed by an amount, followed by measurement.  All ingredients will be kept as simple as reasonable and the measurements will also be kept standardized by currently as strings: ie) tbsp = tablespoons, tsp = teaspoons, lbs = pounds and so on and so forth.  If items are not given a traditional measurement (like descriptions of: 'to taste', or 'slices') those will be measured as whole items of that. ie) salt to taste will instead have the second item in the array = taste.  Similarly if an item calls for lemon juice or lime slices those will be denoted by a call of a number of that item instead of slices or juice amounts.
const herbChickenZ = {
    recipeName: 'Garlic Herb Chicken and Zucchini',
    recipeIngredients: [['chicken', 1, 'lbs'], ['salt', 'taste'], ['black pepper', 'taste'], ['butter', 2, 'tbsp'], ['garlic cloves', 2], ['oregano', 0.5, 'tbsp'], ['thyme', 0.5, 'tbsp'], ['zucchini', 0.5, 'cups'], ['cooking wine', 2, 'tbsp'], ['lemon', 1], ['italian parsley', 0.5, 'tbsp']],
    recipeTags: ["all","fowl"],
    baseServingSize: 3,
    recipeLink: 'https://rasamalaysia.com/garlic-herb-chicken-and-zucchini/#wprm-recipe-container-760335',
    recipeImage: '<img src="https://breakingb0x3s.github.io/Portfolio/recipeImg/herbchickenzucchini.jpg">'
}
const garlicSalmon = {
    recipeName: 'Garlic Butter Salmon and Aspargus',
    recipeIngredients: [['salmon', 1.5, 'lbs'], ['salt', 1, "tsp"], ['asparagus', 1, 'lbs'], ['garlic cloves', 3], ['parsley', 1, 'tbsp'], ['onion powder', 1, 'tbsp'], ['black pepper', 0.5, 'tsp'], ['lemon', 1]],
    recipeTags: ["all","seaFood"],
    baseServingSize: 4,
    recipeLink: 'https://thatlowcarblife.com/garlic-butter-salmon-and-asparagus/#wprm-recipe-container-2525',
    recipeImage: '<img src="https://breakingb0x3s.github.io/Portfolio/recipeImg/garlicbuttersalmon.jpg">'
}