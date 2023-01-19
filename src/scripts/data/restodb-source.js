import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoDbSource{
    static async list() {
        const response = await fetch(API_ENDPOINT.LIST);
        return response.json();
    }

    static async review(data) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': CONFIG.KEY,
            },
            body: data,
          });
          const responseJson = await response.json();
          return responseJson;
        }

    static async detail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default RestoDbSource;