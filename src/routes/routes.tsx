import { TODOS, LADINGPAGE, HOMEPAGE } from './Constants';

import LandingPage from '../pages/landingPage';
import Todos from '../pages/todosPage/TodosPage';
import HomePage from '../pages/home/HomePage';

export interface IRoutes {
  path: string;
  name: string;
  component?: React.ComponentType<any>;
  exact?: boolean;
  isProtected?: boolean;
}

const routes: IRoutes[] = [
  {
    path: TODOS,
    name: 'Página Todos - lista de tarefas',
    component: Todos,
    exact: true,
    isProtected: false,
  },

  {
    path: LADINGPAGE,
    name: 'landing',
    component: LandingPage,
    exact: true,
  },

  {
    path: HOMEPAGE,
    name: 'home',
    component: HomePage,
    exact: true,
  },
];

export default routes;
