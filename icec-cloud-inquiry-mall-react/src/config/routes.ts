import { RouteConfig } from "react-router-config";
import Loadable from 'react-loadable';
import React from 'react';
import InuiqryDetail from '../pages/inquiry-detail';

const routes: RouteConfig[] = [
  {
    path: '/inquiry/inquiry-detail',
    // component: InuiqryDetail
    component: Loadable({
      loader: () => import('../pages/inquiry-detail'),
      loading: () => React.createElement('span', null, 'loading...'),
    }),
  },
  {
    path: '/inquiry/inquiry-detail-by-parts',
    component: Loadable({
      loader: () => import('../pages/inquiry-detail-by-parts'),
      loading: () => React.createElement('span', null, 'loading...'),
    }),
  },
];

export default routes;