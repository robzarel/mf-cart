import faker from 'faker';

const startFdc3 = async () => {
  // const channel = await window.fdc3.getOrCreateChannel('myChannel')

  // channel.addContextListener('result', (result) => {
  //   alert(`${result}`);
  // });
  window.VERSION = '1';
  const root = document.getElementById('dev-cart');

  const cardItems = faker.random.number();

  const cartText = `You have ${faker.random.number()} items in your cart`;

  const div = document.createElement('div');
  div.innerHTML = cartText
  const button = document.createElement('button');
  button.innerHTML = 'send it to another app'
  
  button.addEventListener('click', (event) => {
    console.log('123');
    fdc3.raiseIntent('ViewContact', {
      type: 'fdc3.contact',
      id: { count: cardItems }
    });
  });

  root.appendChild(div);
  root.appendChild(button);
}

if (window.fdc3) {
  startFdc3();
} else {
  window.addEventListener('fdc3Ready', startFdc3);
}
