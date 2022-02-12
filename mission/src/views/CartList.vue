<template>
  <main id="cart-list">
    <ItemListCard
      v-for="item in items"
      :key="item.product_no"
      :id="item.product_no"
      :name="item.name"
      :profile="item.image"
    />
  </main>
</template>

<script>
import ItemListCard from '@/components/ItemList/Card.vue';
import Repository from '@/repositories/RepositoryFactory';

const CartRepository = Repository.get('cart');

export default {
  name: 'CartListPage',

  components: {
    ItemListCard,
  },

  data() {
    return {
      items: [],
    };
  },

  methods: {
    async getCartList() {
      const { data } = await CartRepository.getCartList();
      this.items = data.cart_item;
    },
  },

  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
#cart-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 512px;
  margin: 0 auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
