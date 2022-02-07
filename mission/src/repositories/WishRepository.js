import Client from '@/repositories/Clients/AxiosClient';

const resource = '/wish';

export default {
  getWishList() {
    return Client.get(`${resource}`);
  },
};
