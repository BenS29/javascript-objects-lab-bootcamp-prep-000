var recipes = {ingredient: "amount"};
function updateObjectWithKeyAndValue (recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}
