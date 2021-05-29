import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import root from '../templates/root.jst';
import TodoListView from './TodoListView';
import FormView from './FormView';

const RootView = Marionette.View.extend({
  template: root,

  regions: {
    todoRegion: '#todo-hook',
    formRegion: '#form-hook',
  },

  collection: new Backbone.Collection([
    { assignee: 'Scott', text: 'Write a book about Marionette' },
    { assignee: 'Andrew', text: 'Do some coding' },
  ]),

  collectionEvents: {
    add: 'itemAdded',
  },

  onRender() {
    this.showChildView('todoRegion', new TodoListView({ collection: this.collection }));
    this.showChildView('formRegion', new FormView());
  },

  childViewEvents: {
    'add:todo:item': 'onAddTodoItem',
  },

  onAddTodoItem: function () {
    this.collection.add({
      assignee: $('#id_assignee').val(),
      text: $('#id_text').val(),
    });
  },

  itemAdded: function () {
    // 6
    $('#id_assignee').val('');
    $('#id_text').val('');
  },
});

export default RootView;
