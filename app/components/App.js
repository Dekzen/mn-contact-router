import { Application } from 'backbone.marionette';
import RootView from './RootView';
import TodoListView from './TodoListView';
import Bb from 'backbone';

const App = Application.extend({
  region: '#app-hook',

  initialize(options) {
    console.log('Initialize');
  },

  onStart(app, options) {
    this.showView(new RootView());
    Bb.history.start();
  },
});

export default App;
