import Client from '@/repositories/Clients/AxiosClient';

const resource = '/info';

export default {
  getUserInfo() {
    return Client.get(`${resource}`);
  },
};
