import Backbone from 'backbone';
import ContactModel from './ContactModel';

const ContactCollection = Backbone.Collection.extend({
  model: ContactModel,

  comparator: 'lastName',
});

export default ContactCollection;
