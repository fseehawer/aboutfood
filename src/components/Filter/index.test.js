import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter name="Meat" color="#e73c01" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
