import { createStore } from 'vuex';
import CartModule from '@/store/CartModule';

export default createStore({
  state() {
    return {
      siteName: 'DefJam Streetwear 🥾',
    };
  },

  modules: {
    cart: CartModule,
  },
});
