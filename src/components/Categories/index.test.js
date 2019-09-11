import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Categories options={[
    { name: 'Meat', color: '#e73c01', key: 1 },
    { name: 'Vegetables', color: '#2b9030', key: 2 },
    { name: 'Fruit', color: '#f39200', key: 3 },
  ]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
