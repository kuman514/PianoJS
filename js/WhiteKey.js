import Component from './Component';
import { addKey } from './Keys';

export default class WhiteKey extends Component {
  constructor(props, state) {
    super(props, state);

    /*
      Props of WhiteKey
        - keyName: string
    */

    this.rootElement = document.createElement('button');
    this.rootElement.className = 'white-key';

    this.sfxElement = document.querySelector(`#sfx-${props.keyName}`);

    this.onDown = () => {
      this.rootElement.classList.add('key-pressed');
      this.sfxElement.play();
    };
    
    this.onUp = () => {
      this.rootElement.classList.remove('key-pressed');
      this.sfxElement.pause();
      this.sfxElement.currentTime = 0;
    };

    this.rootElement.addEventListener('mousedown', () => {
      this.onDown();
    });

    this.rootElement.addEventListener('mouseup', () => {
      this.onUp();
    });

    addKey({
      keyName: props.keyName,
      onUp: this.onUp,
      onDown: this.onDown
    });

    this.render = () => {
      return this.rootElement;
    };
  }
}
