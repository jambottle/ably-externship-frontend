import ItemRepository from '@/repositories/ItemRepository';

const repositories = {
  item: ItemRepository,
};

export default {
  get: (name) => repositories[name],
};
