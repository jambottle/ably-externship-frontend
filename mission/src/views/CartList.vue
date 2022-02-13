<template>
  <main id="cart-list">
    <CartListCard
      v-for="item in items"
      :key="item.product_no"
      :id="item.product_no"
      :name="item.name"
      :desc="item.description"
      :discount_price="item.price"
      :original_price="item.original_price"
      :profile="item.image"
    />

    <router-link to="/order">
      <button
        class="w3-orange w3-xlarge w3-round-large w3-padding w3-text-white"
        data-test="order-button"
      >
        <strong>🛍 구매하기</strong>
      </button>
    </router-link>
  </main>
</template>

<script>
import CartListCard from '@/components/CartList/Card.vue';
import Repository from '@/repositories/RepositoryFactory';

const CartRepository = Repository.get('cart');

export default {
  name: 'CartListPage',

  components: {
    CartListCard,
  },

  data() {
    return {
      items: [],
    };
  },

  methods: {
    async getCartList() {
      try {
        const { data, status } = await CartRepository.getCartList();
        if (status !== 200) {
          throw new Error('장바구니의 목록을 조회할 수 없습니다.');
        } else {
          this.items = data.cart_item;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },

  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
#cart-list {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 100%);
  grid-auto-flow: row;

  max-width: 512px;
  margin: 0 auto 84px;
  text-align: left;

  a {
    width: 100%;
    max-width: 150px;
    margin: 15px auto 0;
    text-decoration: none;

    button {
      display: block;
      margin: 8px auto;
      border: 0;
      box-shadow: 4px 4px lightgray;
      cursor: pointer;

      strong {
        font-weight: bold;
      }
    }
  }
}
</style>
