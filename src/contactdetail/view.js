import { View } from 'backbone.marionette';
import template from './template.jst';

export default View.extend({
  template: template,

  triggers: {
    'click #save-contact': 'save:model',
  },
});
