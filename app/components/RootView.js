import Marionette from 'backbone.marionette';
import _ from 'underscore';
import BtnView from './BtnView';

const rootTemplate = _.template('<div id="js-main-region"></div>');

const RootView = Marionette.View.extend({
  className: 'container mt-5 mb-5',
  template: rootTemplate,

  regions: {},

  onRender() {
    const btn = new BtnView();
    console.log(btn);
    console.log('RootView Rendered');
  },
});

export default RootView;
