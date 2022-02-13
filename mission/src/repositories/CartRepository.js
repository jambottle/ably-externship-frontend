import Client from '@/repositories/Clients/AxiosClient';

const resource = '/cart';

export default {
  getCartList() {
    return Client.get(`${resource}`);
  },
  postCartItem(payload) {
    return Client.post(`${resource}`, payload);
  },
  deleteCartItem(itemNo) {
    return Client.delete(`${resource}/${itemNo}`);
  },
};
