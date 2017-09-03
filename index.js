var recipes = {prop1: '1'}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return Object.assign({}, recipes, {prop2:2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes.prop2 = 2
  return recipes
}
