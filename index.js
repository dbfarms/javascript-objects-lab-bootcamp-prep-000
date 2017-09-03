var recipes = {prop1: '1'}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  Object.assign({}, recipes, {prop2:[2]})
  return recipes
}
