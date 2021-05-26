import Marionette from 'backbone.marionette';
import _ from 'underscore';
import resultTemplate from '../templates/resultTemplate.jst';

const ResultView = Marionette.View.extend({
  template: resultTemplate,

  initialize(ops) {
    this.count = ops.count || 1;
  },

  templateContext() {
    return {
      count: this.count,
    };
  },
});

export default ResultView;
