import Icon from './image.jpeg';
import './style.css';
import {homeElements} from './home-page';
import {foodMenu, menuElements} from './menu-page';
import {contactElements, contactDetails} from './contact-page';

//Title heading
const h1 = document.createElement('h1');
h1.textContent = 'Mount View Pub';

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.classList.add('home-button');
homeButton.addEventListener('click', e => {
  clearPage()
  content.appendChild(homeElements());
})
tabContainer.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('menu-button');
menuButton.addEventListener('click', e => {
  clearPage()
  content.appendChild(menuElements());
})
tabContainer.appendChild(menuButton);

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';
contactButton.classList.add('contact-button');
contactButton.addEventListener('click', e => {
  clearPage()
  content.appendChild(contactElements());
})
tabContainer.appendChild(contactButton);


document.body.prepend(tabContainer);
document.body.prepend(h1);


const content = document.getElementById('content');

content.appendChild(homeElements());

//Tab functionality: clear page
function clearPage() {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}