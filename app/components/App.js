import { Application } from 'backbone.marionette';
import RootView from './RootView';
import Bb from 'backbone';
import FormModel from './Form/FormModel';

const App = Application.extend({
  region: '#app-hook',

  initialize(options) {
    console.log('Initialize');
  },

  onStart(app, options) {
    this.showView(new RootView(options));
    Bb.history.start();
  },
});

export default App;
