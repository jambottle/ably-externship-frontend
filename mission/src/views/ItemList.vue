<template>
  <main id="item-list">
    <ItemListCard
      v-for="item in items"
      :key="item.product_no"
      :name="item.name"
      :desc="item.description"
      :discount_price="item.price"
      :original_price="item.original_price"
      :profile="item.image"
      @click="$router.push({ path: `/item/${item.product_no}` })"
    />
  </main>
</template>

<script>
import axios from 'axios';
import ItemListCard from '@/components/ItemList/Card.vue';

export default {
  name: 'ItemListPage',

  components: {
    ItemListCard,
  },

  data() {
    return {
      items: [],
    };
  },

  methods: {
    getItemList() {
      axios
        .get(
          'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0/item',
          // eslint-disable-next-line comma-dangle
          { headers: { Authorization: 'abcd1234' } }
        )
        .then((response) => {
          this.items = response.data.items;
        });
    },
  },

  created() {
    this.getItemList();
  },
};
</script>

<style lang="scss" scoped>
#item-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 512px;
  margin: 0 0 84px 2px;
  text-align: left;
}
</style>
