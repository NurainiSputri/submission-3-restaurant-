import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import NotFound from '../views/pages/notFound';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/404': NotFound,
};

export default routes;
