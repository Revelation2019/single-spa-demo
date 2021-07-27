import { Provider } from 'mobx-react';
import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import Main from './components/Main';
import stores from './stores';

const ProcudtDetail = (props: RouteConfigComponentProps<any>) => {
  return (
    <Provider {...stores}>
      <Main {...props}></Main>
    </Provider>
  )
}

export default ProcudtDetail;