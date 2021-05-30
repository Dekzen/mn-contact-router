import Marionette from 'backbone.marionette';
import root from '../templates/root.jst';

const RootView = Marionette.View.extend({
  template: root,
});

export default RootView;
