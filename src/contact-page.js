let contactDetails = [
    'Address: 123 Yellowbrick Road, Wonderland, 9000',
    'Phone: 09 9999 9999',
    'Email: contact@mountviewpub.com'
]

function contactElements() {
  const h3 = document.createElement('h3');
  h3.textContent = 'Contact Information';
  const contact = document.createElement('ul');
  for(let i = 0; i < contactDetails.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = contactDetails[i];
    contact.appendChild(listItem);
  }
  
  h3.appendChild(contact);
  return h3;
}

export {contactElements, contactDetails};