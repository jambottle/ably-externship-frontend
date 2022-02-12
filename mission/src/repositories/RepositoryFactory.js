import ItemRepository from '@/repositories/ItemRepository';
import WishRepository from '@/repositories/WishRepository';
import CartRepository from '@/repositories/CartRepository';
import InfoRepository from '@/repositories/InfoRepository';

const repositories = {
  item: ItemRepository,
  wish: WishRepository,
  cart: CartRepository,
  info: InfoRepository,
};

export default {
  get: (name) => repositories[name],
};
