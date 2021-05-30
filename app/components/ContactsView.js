import Marionette from 'backbone.marionette';
import ContactView from './ContactView';

const ContactsView = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ContactView,
});

export default ContactsView;
