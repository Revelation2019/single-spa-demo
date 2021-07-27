import { singleSpaPacker } from './utils';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

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
