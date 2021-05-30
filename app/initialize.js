import './styles/application.css';
import App from 'components/App';
import Backbone from 'backbone';
import FormModel from './components/Form/FormModel';

let initialData = {
  collection: [
    { assignee: 'Scott', text: 'Write a book about Marionette' },
    { assignee: 'Andrew', text: 'Do some coding' },
  ],

  model: new FormModel(),
};

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start({
    collection: new Backbone.Collection(initialData.collection),
    model: initialData.model,
  });
});
