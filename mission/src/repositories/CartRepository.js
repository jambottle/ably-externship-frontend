import Client from '@/repositories/Clients/AxiosClient';

const resource = '/cart';

export default {
  getCartList() {
    return Client.get(`${resource}`);
  },
};
