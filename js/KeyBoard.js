import Component from './Component';
import BlackKeyLayer from './BlackKeyLayer';
import WhiteKeyLayer from './WhiteKeyLayer';

export default class KeyBoard extends Component {
  constructor(props, state) {
    super(props, state);

    /*
      Props of KeyBoard
        - keys: string[] (length 5 or 7)
    */

    this.rootElement = document.createElement('div');
    this.rootElement.className = `${props.keys.length === 5 ? 'five' : 'seven'}-key`;

    this.blackKeys = new BlackKeyLayer({
      keys: props.keys.filter((_, index) => {
        return (index % 2 === 1);
      })
    }, {});

    this.whiteKeys = new WhiteKeyLayer({
      keys: props.keys.filter((_, index) => {
        return (index % 2 === 0);
      })
    }, {});

    this.render = () => {
      this.rootElement.appendChild(this.blackKeys.render());
      this.rootElement.appendChild(this.whiteKeys.render());
      return this.rootElement;
    };
  }
}
