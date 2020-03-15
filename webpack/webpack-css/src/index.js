// We declare here that the 'style.css' file is needed
import './style.css';

const component = text => {
  const element = document.createElement('div');
  element.textContent = text;
  // Here we use a class defined in 'style.css'
  element.classList.add('important');
  return element;
};

document.body.appendChild(component('Webpack with CSS!'));
