const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});
   
Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.waitForElement('.restaurant-item__not__found', 10);
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.waitForElement('.restaurant-item__not__found', 10);
    I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");
    I.amOnPage("/");

    I.waitForElement(".restaurant__name a", 10);

    const firstRestaurant = locate(".restaurant__name a").first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement("#likeButton", 10);
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.seeElement(".restaurant-item");
    const likedRestaurantName = await I.grabTextFrom(".restaurant__name");

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.waitForElement('.restaurant-item__not__found', 10);
    I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");
    I.amOnPage("/");

    I.waitForElement(".restaurant__name a", 10);

    const firstRestaurant = locate(".restaurant__name a").first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement("#likeButton", 10);
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.seeElement(".restaurant-item");
    const likedRestaurantName = await I.grabTextFrom(".restaurant__name");

    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    //Unlike
    I.click(firstRestaurantName);

    I.waitForElement("#likeButton", 10);
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.waitForElement('.restaurant-item__not__found', 10);
    I.see("Tidak ada restaurant untuk ditampilkan", ".restaurant-item__not__found");
});