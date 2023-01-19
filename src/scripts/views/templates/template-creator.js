import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan</h4>
    <div>
      ${restaurant.menus.foods
        .map(
          (food, i) => `
            <p>${i + 1}. ${food.name}</p>
          `,
        )
      .join('')}
    </div>
    <h4>Menu Minuman</h4>
    <div>
      ${restaurant.menus.drinks
        .map(
          (drink, i) => `
            <p>${i + 1}. ${drink.name}</p>
          `,
        )
      .join('')}
    </div>
    <h4>Customer Reviews</h4>
    <div>
    ${restaurant.customerReviews
      .map(
        (review) => `
        <div class="review">
          <p class="review-name">${review.name}</p>
          <p class="review-date">${review.date}</p>
          <p class="review-body">${review.review}</p>
          <hr>
        </div>
        `,
      )
    .join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};