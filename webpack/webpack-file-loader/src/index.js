// We declare here that the 'style.css' file is needed
import webpack from './webpack.svg';

const createImage = () => {
  const image = document.createElement('img');
  image.src = webpack;
  image.width = 300;
  image.height = 100;
  return image;
};

document.body.appendChild(createImage());
