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

  getters: {
    cartTotalPrice(state) {
      let sum = 0;
      for (let i = 0; i < state.cartList.length; i += 1) {
        sum += state.cartList[i].price;
      }
      return sum;
    },
  },

  mutations: {
    setCartList(state, payload) {
      state.cartList = payload;
    },
    postCartItem(state, payload) {
      state.cartList.push(payload);
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
