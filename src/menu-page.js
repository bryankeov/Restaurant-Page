let foodMenu = [
  {
    name: 'Bangers & Mash',
    price: '$20'
  },
  {
    name: 'Parma',
    price: '$25'
  },
  {
    name: 'Buffalo Wings (12pc)',
    price: '$12'
  }
];

function menuElements() {
  const h3 = document.createElement('h3');
  h3.textContent = 'Menu';
  const menuContainer =  document.createElement('div');
  menuContainer.classList.add('menu-container');

  h3.appendChild(menuContainer);
  
  for(let i = 0; i < foodMenu.length; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = foodMenu[i].name

    const menuPrice = document.createElement('div');
    menuPrice.classList.add('menu-price');
    menuPrice.textContent = foodMenu[i].price;

    menuContainer.appendChild(menuItem);
    menuContainer.appendChild(menuPrice);
  }

  return h3;
}

export {foodMenu, menuElements};