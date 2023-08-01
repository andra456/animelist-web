import React from 'react';
import MainRoutes from './main';

const Home = React.lazy(() => import('../pages/home'));
const Anime = React.lazy(() => import('../pages/anime'));

const baseConfig = {
  exact: true,
  sensitive: true,
  strict: true,
};

export const listRoutes = [
  {
    key: 'explore',
    ...baseConfig,
    text: 'explore',
    menu: true,
    path: '/',
    layout: 'sidebar',
    children: <Home />,
    auth: true,
  },
  {
    key: 'anime',
    ...baseConfig,
    text: 'explore',
    menu: true,
    path: '/anime/:id',
    layout: 'sidebar',
    children: <Anime />,
    auth: true,
  },
];

const Routes = () => <MainRoutes options={listRoutes} />;

export default Routes;
