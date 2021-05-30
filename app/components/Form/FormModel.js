import Backbone from 'backbone';

const FormModel = Backbone.Model.extend({
  defaults: {
    assignee: '',
    text: '',
  },

  validate: function (attrs) {
    let errors = {};
    let hasError = false;

    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }
    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }

    if (hasError) {
      return errors;
    }
  },
});

export default FormModel;
