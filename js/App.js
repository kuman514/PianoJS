import Component from './Component';
import KeyBoard from './KeyBoard';

class App extends Component {
  constructor(props, state) {
    super(props, state);

    this.rootElement = document.querySelector('main');

    this.keyBoards = [
      new KeyBoard({
        keys: ['KeyZ', 'KeyS', 'KeyX', 'KeyD', 'KeyC']
      }, {}),
      new KeyBoard({
        keys: ['KeyV', 'KeyG', 'KeyB', 'KeyH', 'KeyN', 'KeyJ', 'KeyM']
      }, {}),
      new KeyBoard({
        keys: ['Comma', 'KeyL', 'Period', 'Semicolon', 'Slash']
      }, {}),
    ];

    this.render = () => {
      this.keyBoards.forEach((item) => {
        this.rootElement.appendChild(item.render());
      });
    };
  }
}

(() => {(new App()).render();})();
