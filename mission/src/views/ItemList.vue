<template>
  <main id="item-list">
    <ItemListCard
      v-for="item in items"
      :key="item.product_no"
      :id="item.product_no"
      :name="item.name"
      :desc="item.description"
      :discount_price="item.price"
      :original_price="item.original_price"
      :profile="item.image"
    />
  </main>
</template>

<script>
import ItemListCard from '@/components/ItemList/Card.vue';
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');

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
    async getItemList() {
      const { data, status } = await ItemRepository.getItemList();
      if (status === 200) this.items = data.items;
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
  margin: 0 auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
