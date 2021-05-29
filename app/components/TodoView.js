import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import todoitem from '../templates/todoitem.jst';

const TodoView = Marionette.View.extend({
  tagName: 'li',
  template: todoitem,
});

export default TodoView;
