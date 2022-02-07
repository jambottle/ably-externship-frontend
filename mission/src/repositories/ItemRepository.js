import Client from '@/repositories/Clients/AxiosClient';

const resource = '/item';

export default {
  getItemList() {
    return Client.get(`${resource}`);
  },
  getItemInfo(itemNo) {
    return Client.get(`${resource}/${itemNo}`);
  },
};
