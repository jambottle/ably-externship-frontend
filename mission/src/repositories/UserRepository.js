import Client from '@/repositories/Clients/AxiosClient';

const resource = '/info';

export default {
  getUserInfo() {
    return Client.get(`${resource}`);
  },
  putUserInfo(payload, id) {
    return Client.put(`${resource}/${id}`, payload);
  },
};
