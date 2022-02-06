<template>
  <main id="wish-list">
    <ItemListCard
      v-for="item in items"
      :key="item.product_no"
      :name="item.name"
      :desc="item.description"
      :discount_price="item.price"
      :original_price="item.original_price"
      :profile="item.image"
    />
  </main>
</template>

<script>
import axios from 'axios';
import ItemListCard from '@/components/ItemList/Card.vue';

export default {
  name: 'WishListPage',

  components: {
    ItemListCard,
  },

  data() {
    return {
      items: [],
    };
  },

  methods: {
    getWishList() {
      axios
        .get(
          'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0/wish',
          // eslint-disable-next-line comma-dangle
          { headers: { Authorization: 'abcd1234' } }
        )
        .then((response) => {
          this.items = response.data.items;
        });
    },
  },

  created() {
    this.getWishList();
  },
};
</script>

<style lang="scss" scoped>
#wish-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 512px;
  margin: 0 0 84px 2px;
  text-align: left;
}
</style>
