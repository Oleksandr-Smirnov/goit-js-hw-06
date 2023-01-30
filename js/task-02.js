const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newList = ingredients => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem
  })
}

const ulEl = newList(ingredients);
const list = document.querySelector("#ingredients");
list.append(...ulEl)
