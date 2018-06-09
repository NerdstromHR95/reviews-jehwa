// const App = require('../client/components/App.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App.jsx';

test('renders without crashing', () => {
  // expect(App.jestTest(1,2)).toBe(3);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})