import { RouteConfig } from "react-router-config";
import Loadable from 'react-loadable';
import React from 'react';

const routes: RouteConfig[] = [
  {
    path: '/product/product-detail',
    component: Loadable({
      loader: () => import('../pages/product-detail'),
      loading: () => React.createElement('span', null, 'loading...'),
    }),
  },
];

export default routes;