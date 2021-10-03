import { TODOS, LADINGPAGE } from './Constants';

import LandingPage from '../pages/landingPage';
import Todos from '../pages/todosPage/TodosPage';

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
];

export default routes;
