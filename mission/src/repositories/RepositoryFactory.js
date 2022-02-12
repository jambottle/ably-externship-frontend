import ItemRepository from '@/repositories/ItemRepository';
import WishRepository from '@/repositories/WishRepository';
import CartRepository from '@/repositories/CartRepository';
import UserRepository from '@/repositories/UserRepository';

const repositories = {
  item: ItemRepository,
  wish: WishRepository,
  cart: CartRepository,
  info: UserRepository,
};

export default {
  get: (name) => repositories[name],
};
