import Marionette from 'backbone.marionette';
import _ from 'underscore';

const ResultView = Marionette.View.extend({
  className: 'mt-5 card p-5',
  template: _.template('<div><%= count %></div>'),

  initialize(ops) {
    this.count = ops.count || 1;
    console.log(this.count);
  },

  templateContext() {
    return {
      count: this.count,
    };
  },
});

export default ResultView;
