(function App() {
  const keyName = [
    'KeyZ', 'KeyS', 'KeyX', 'KeyD', 'KeyC',
    'KeyV', 'KeyG', 'KeyB', 'KeyH', 'KeyN', 'KeyJ', 'KeyM', 
    'Comma', 'KeyL', 'Period', 'Semicolon', 'Slash'
  ];
  const keys = {};

  for (let i = 0; i < 17; i++) {
    const keyElem = document.querySelector(`#key-${i}`);
    const sfxElem = document.querySelector(`#sfx-${i}`);

    const onDown = () => {
      keyElem.classList.add('key-pressed');
      sfxElem.play();
    };

    const onUp = () => {
      keyElem.classList.remove('key-pressed');
      sfxElem.pause();
      sfxElem.currentTime = 0;
    };

    keyElem.addEventListener('mousedown', onDown);
    keyElem.addEventListener('mouseup', onUp);

    Object.assign(keys, {
      [keyName[i]]: {
        onDown: onDown,
        onUp: onUp
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (keys[event.code]) {
      keys[event.code].onDown();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (keys[event.code]) {
      keys[event.code].onUp();
    }
  });
})();