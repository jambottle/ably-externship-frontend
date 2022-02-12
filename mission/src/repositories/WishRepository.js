import Client from '@/repositories/Clients/AxiosClient';

const resource = '/wish';

export default {
  getWishList() {
    return Client.get(`${resource}`);
  },
  postWishItem(payload) {
    return Client.post(`${resource}`, payload);
  },
  deleteWishItem(itemNo) {
    return Client.delete(`${resource}/${itemNo}`);
  },
};
