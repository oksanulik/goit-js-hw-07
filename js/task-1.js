const menuItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItems.length}`);

menuItems.forEach((item) => {
  const nameCategories = item.querySelector("h2").textContent;
  const lengthCategories = item.querySelectorAll("ul li").length;
  console.log(`Category: ${nameCategories}`);
  console.log(`Elements: ${lengthCategories}`);
});
