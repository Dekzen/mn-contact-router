import Marionette from 'backbone.marionette';
import _ from 'underscore';
import BtnView from './BtnView';
import ResultView from './ResultView';

const rootTemplate = _.template(`
    <div id="js-main-region"></div>
    <div id="js-secondary-region"></div>
`);

const RootView = Marionette.View.extend({
  className: 'container mt-5 mb-5 text-center',
  template: rootTemplate,

  initialize() {
    this.count = 10;
  },

  regions: {
    btnRegion: '#js-main-region',
    previewRegion: '#js-secondary-region',
  },

  childViewEvents: {
    'button:click': 'onClick',
  },

  onClick() {
    this.count = this.count + 1;
    this.renderResult(this.count);
  },

  renderResult(count) {
    this.showChildView('previewRegion', new ResultView({ count: count }));
  },

  onRender() {
    const btn = new BtnView();
    this.showChildView('btnRegion', btn);
    this.renderResult(this.count);
  },
});

export default RootView;
