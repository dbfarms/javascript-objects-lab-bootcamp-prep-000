var recipes = {prop1: "1"}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return recipes = Object.assign({}, recipes, { prop2: [2] } )
}
