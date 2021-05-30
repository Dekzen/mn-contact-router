import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import ContactCollection from '../models/ContactCollection';
import root from '../templates/root.jst';
import ContactsView from './ContactsView';

const RootView = Marionette.View.extend({
  template: root,
  regions: {
    contactsRegion: '#contacts-region',
  },

  onRender() {
    this.showChildView('contactsRegion', new ContactsView({ collection: this.collection }));
    // this.showChildView('formRegion', new FormView({ model: this.model }));
  },
  // addItem(child) {
  //   this.model.set(
  //     {
  //       assignee: child.ui.assignee.val(),
  //       text: child.ui.text.val(),
  //     },
  //     { validate: true }
  //   );
  //   if (this.model.isValid()) {
  //     let items = this.model.pick('assignee', 'text');
  //     this.collection.add(items);
  //   }
  // },
  // itemAdded: function () {
  //   this.model.set({
  //     assignee: '',
  //     text: '',
  //   });
  // },
});

export default RootView;
