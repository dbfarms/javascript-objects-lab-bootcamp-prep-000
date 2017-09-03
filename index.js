var recipes = {}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  var recipes = Object.assign({}, recipes, { prop2: [2] } )
  return recipes
}
