import Component from './Component';
import BlackKey from './BlackKey';

export default class BlackKeyLayer extends Component {
  constructor(props, state) {
    super(props, state);

    /*
      Props of BlackKeyLayer
        - keys: string[] (length 2~3)
    */

    this.rootElement = document.createElement('div');
    this.rootElement.className = `black-${props.keys.length * 2 + 1}keys`;

    this.blackKeys = Array.from({
      length: props.keys.length
    }, (_, index) => {
      return new BlackKey({
        keyName: props.keys[index]
      }, {});
    });

    this.render = () => {
      this.rootElement.appendChild(document.createElement('div'));

      this.blackKeys.forEach((item) => {
        this.rootElement.appendChild(item.render());
        this.rootElement.appendChild(document.createElement('div'));
      });

      return this.rootElement;
    };
  }
}
