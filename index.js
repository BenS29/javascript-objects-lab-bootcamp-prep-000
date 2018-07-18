var recipes = {key: "value"};
function destructivelyUpdateObjectWithKeyAndValue (recipe, key, value) {
  recipe[key] = value;
  return recipe;
}
function updateObjectWithKeyAndValue (recipe, key, value) {
  Object.assign({}, recipe, {[key]: value});
  return recipe;
}