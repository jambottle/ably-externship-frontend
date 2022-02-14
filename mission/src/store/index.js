import { createStore } from 'vuex';
import Repository from '@/repositories/RepositoryFactory';

const CartRepository = Repository.get('cart');

export default createStore({
  state() {
    return {
      siteName: 'DefJam Streetwear 🥾',
      cartList: [],
    };
  },

  mutations: {
    setCartList(state, payload) {
      state.cartList = payload;
    },
  },

  actions: {
    async getCartList(context) {
      try {
        const { data, status } = await CartRepository.getCartList();
        if (status !== 200) {
          throw new Error('장바구니의 목록을 조회할 수 없습니다.');
        } else {
          context.commit('setCartList', data.cart_item);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },

  modules: {},
});
