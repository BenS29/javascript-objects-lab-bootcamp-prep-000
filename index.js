var recipes = {key: "value"};
function destructivelyUpdateObjectWithKeyAndValue (recipe, key, value) {
  recipe[key] = value;
  return recipe;
}
function updateObjectWithKeyAndValue (recipe, key, value) {
  var newRecipe = Object.assign({}, recipe, {[key]: value});
  return newRecipe;
}