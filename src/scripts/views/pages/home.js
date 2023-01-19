import RestoDbSource from '../../data/restodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
        <div class="content">
          <h2 class="content__heading">Explore Restaurant</h2>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      `;
    },

    async afterRender() {
      const { restaurants } = await RestoDbSource.list();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((data) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(data);
      });
    },
  };

export default Home;