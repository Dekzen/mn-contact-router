import Marionette from 'backbone.marionette';
import contact from '../templates/contact.jst';
import ContactModel from '../models/ContactModel';

const ContactView = Marionette.View.extend({
  tagName: 'li',
  template: contact,
});

export default ContactView;
