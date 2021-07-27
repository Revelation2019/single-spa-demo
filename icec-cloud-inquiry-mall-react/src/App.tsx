import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes }  from 'react-router-config';
import routes from './config/routes';
import { Provider } from 'mobx-react';
import stores from './stores';

const App = () => {
  return (
    <HashRouter>
      <Provider {...stores}>{renderRoutes(routes)}</Provider>
    </HashRouter>
  )
}

export default App;
