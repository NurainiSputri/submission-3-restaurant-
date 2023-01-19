import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/fav-res-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/fav-res-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/fav-res-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;