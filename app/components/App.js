import Marionette from 'backbone.marionette';
import RootView from './RootView';

const App = Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new RootView());
  },
});

export default App;
