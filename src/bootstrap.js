import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;  
};

const root = document.getElementById('dev-cart');
root && mount(root);

export { mount };
