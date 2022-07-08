import Icon from './image.jpeg';

function homeElements() {
  const homePage = document.createElement('div');
  homePage.classList.add('homepage-container');

  const h3 = document.createElement('h3');
  h3.textContent = 'The best pub in the region!';

  const para = document.createElement('p');
  para.textContent = "Mountain View Pub is a favourite of locals and visitors alike. Our warm and welcoming atmosphere paired with friendly service provides the perfect place to gather for after work drinks, hearty family meals or an overdue catch up with friends. We’ve got all your pub favourites, kids meals and regular specials to leave you full and satisfied!";

  const myImage = new Image();
  myImage.src = Icon;

  homePage.appendChild(h3);
  homePage.appendChild(para);
  homePage.appendChild(myImage);


  return homePage;
}

export {homeElements};