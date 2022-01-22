const keys = {};

export function addKey({ keyName, onUp, onDown }) {
  Object.assign(keys, {
    [keyName]: {
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
