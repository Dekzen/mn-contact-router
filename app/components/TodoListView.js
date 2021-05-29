import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoView from './TodoView';

const TodoListView = Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'list-group',
  childView: TodoView,
});

export default TodoListView;
