var recipes = {ingredient: "amount"};
function destructivelyUpdateObjectWithKeyAndValue (recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}
