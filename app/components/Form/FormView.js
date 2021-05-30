import Marionette from 'backbone.marionette';
import form from '../../templates/form.jst';

const FormView = Marionette.View.extend({
  template: form,

  ui: {
    assignee: '#id_assignee',
    text: '#id_text',
  },

  triggers: {
    submit: 'add:todo:item',
  },

  modelEvents: {
    change: 'render',
  },
});

export default FormView;
