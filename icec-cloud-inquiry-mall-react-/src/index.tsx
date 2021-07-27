import ReactDOM from 'react-dom';
import React from 'react';
import { singleSpaPacker } from './utils';
import App from './App';

console.log('111111111111111111111111111')

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const { bootstrap, mount, unmount } = singleSpaPacker(App);
export { bootstrap, mount, unmount };