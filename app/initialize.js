import './styles/application.css';
import App from 'components/App';
import RootView from './components/RootView';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
