const form = document.querySelector('#form');
const contactsList = document.querySelector('#list');
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const contact = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim()
  };
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts))
  form.reset();
  renderContacts();
});

contactsList.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'delete') {
    const index = e.target.dataset.index;
    contacts.splice(index);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
  }
});

contactsList.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'edit') {
      const index = e.target.dataset.index;
      form.firstName.value = contacts[index].firstName
      form.lastName.value = contacts[index].lastName
      form.phone.value = contacts[index].phone
      form.email.value = contacts[index].email
      contacts.splice(index);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      renderContacts();
    }
  });

function renderContacts() {
  contactsList.innerHTML = '';
  contacts.forEach((contact, index) => {
    contactsList.innerHTML += `
      <li>
        Ім'я: ${contact.firstName} - Прізвище: ${contact.lastName} - Телефон: ${contact.phone} - Емеіл: ${contact.email}
        <button id="delete-button" data-action="delete" data-index="${index}">Видалити</button>
        <button id="edit-button" data-action="edit" data-index="${index}">Змінити</button>
      </li>
    `;
  });
}

renderContacts(); 