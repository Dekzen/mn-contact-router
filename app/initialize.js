import './styles/application.css';
import App from 'components/App';
import ContactCollection from './models/ContactCollection';

let collection = new ContactCollection([
  {
    firstName: 'Bob',
    lastName: 'Brigham',
    phoneNumber: '555-0163',
  },
  {
    firstName: 'Alice',
    lastName: 'Zarten',
    phoneNumber: '555-0184',
  },
  {
    firstName: 'Charlie',
    lastName: 'Campbell',
    phoneNumber: '555-0129',
  },
]);

document.addEventListener('DOMContentLoaded', () => {
  const ContactManager = new App();
  ContactManager.start({ collection: collection });
});
