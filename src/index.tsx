import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app';

const srces = [
  './1.gif',
  './2.gif',
  './3.gif',
  './4.gif',
  './5.gif'
];

ReactDOM.render(<App srces={srces}/>, document.getElementById('app'));
