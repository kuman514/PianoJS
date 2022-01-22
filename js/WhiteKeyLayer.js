import Component from './Component';
import WhiteKey from './WhiteKey';

export default class WhiteKeyLayer extends Component {
  constructor(props, state) {
    super(props, state);

    /*
      Props of WhiteKeyLayer
        - keys: string[] (length 3~4)
    */

    this.rootElement = document.createElement('div');
    this.rootElement.className = `white-${props.keys.length * 2 - 1}keys`;

    this.whiteKeys = Array.from({
      length: props.keys.length
    }, (_, index) => {
      return new WhiteKey({
        keyName: props.keys[index]
      }, {});
    });

    this.render = () => {
      this.whiteKeys.forEach((item) => {
        this.rootElement.appendChild(item.render());
      });

      return this.rootElement;
    };
  }
}
