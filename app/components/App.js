import { Application } from 'backbone.marionette';
import RootView from './RootView';
import Bb from 'backbone';

const App = Application.extend({
  region: '#main-region',

  initialize(options) {
    console.log('Initialize');
  },

  onStart(app, options) {
    this.showView(new RootView(options));
    Bb.history.start();
  },
});

export default App;
