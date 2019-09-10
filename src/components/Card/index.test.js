import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card
          tag="Meat"
          imageSrc="1.jpg"
          imageWebpSrc="1.webp"
          title="Apple"
          about="about the apple"
      />, div);
  ReactDOM.unmountComponentAtNode(div);
});
