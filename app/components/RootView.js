import Marionette from 'backbone.marionette';
import root from '../templates/root.jst';
import TodoListView from './TodoListView';
import FormView from './Form/FormView';

const RootView = Marionette.View.extend({
  template: root,

  regions: {
    listRegion: '#list-hook',
    formRegion: '#form-hook',
  },

  collectionEvents: {
    add: 'itemAdded',
  },

  childViewEvents: {
    'add:todo:item': 'addItem',
  },

  onRender() {
    this.showChildView('listRegion', new TodoListView({ collection: this.collection }));
    this.showChildView('formRegion', new FormView({ model: this.model }));
  },

  addItem(child) {
    this.model.set(
      {
        assignee: child.ui.assignee.val(),
        text: child.ui.text.val(),
      },
      { validate: true }
    );

    if (this.model.isValid()) {
      let items = this.model.pick('assignee', 'text');
      this.collection.add(items);
    }
  },

  itemAdded: function () {
    this.model.set({
      assignee: '',
      text: '',
    });
  },
});

export default RootView;
