import Marionette from 'backbone.marionette';
import _ from 'underscore';
import BtnView from './BtnView';
import ResultView from './ResultView';
import rootTemplate from '../templates/rootTemplate.jst';
import Backbone from 'backbone';

const JokeModel = Backbone.Model.extend({
  urlRoot: 'https://v2.jokeapi.dev/joke/Programming?type=twopart',
});

const Joke = Marionette.View.extend({
  className: 'alert alert-dark mt-5',
  template: _.template(`
  <p><%= setup %></p>
  <p><%= delivery %></p>
  `),
});

const RootView = Marionette.View.extend({
  template: rootTemplate,

  initialize() {
    this.model = new JokeModel();
  },

  regions: {
    btnRegion: '#js-main-region',
    previewRegion: '#js-secondary-region',
  },

  ui: {
    btn: 'button',
  },

  events: {
    'click @ui.btn': 'fetchJoke',
  },

  modelEvents: {
    sync: 'renderJoke',
  },

  fetchJoke() {
    this.getUI('btn').attr('disabled', true).text('Do not hurry...');
    console.log('clicked');
    this.model.unset('id');
    this.model.fetch();
  },

  renderJoke(model, res, ops) {
    this.showChildView('previewRegion', new Joke({ model: model }));
  },

  renderResult(count) {
    this.showChildView('previewRegion', new ResultView({ count: count }));
  },

  onRender() {
    const btn = new BtnView();
    this.showChildView('btnRegion', btn);
    //this.renderResult(this.count);
    this.model.fetch();
    //this.renderJoke();
  },
});

export default RootView;
