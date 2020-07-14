const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log(ingredients);
// Write a while loop that prints out the contents of ingredients:
let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++
}
// Write a for loop that prints out the contents of ingredients:
for (let ing of ingredients) {
  console.log(ing);
  
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}