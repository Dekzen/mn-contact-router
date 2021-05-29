import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import form from '../templates/form.jst';

const FormView = Marionette.View.extend({
  template: form,

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text',
  },

  triggers: {
    'submit @ui.form': 'add:todo:item',
  },
});

export default FormView;
