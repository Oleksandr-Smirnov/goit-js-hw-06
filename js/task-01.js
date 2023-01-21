const itemEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach((itemEvery) =>
  {
  console.log(`Category: ${itemEvery.querySelector("h2").textContent}`);
  console.log(`Elements: ${itemEvery.querySelectorAll("li").length}`) ;
 });

// First homework