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
      try {
        const { data, status } = await ItemRepository.getItemList();
        if (status !== 200) {
          throw new Error('현재 상품의 목록을 조회할 수 없습니다.');
        } else {
          this.items = data.items;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },

  created() {
    this.getItemList();
  },
};
</script>

<style lang="scss" scoped>
#item-list {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 50%);
  grid-auto-flow: row;

  max-width: 512px;
  margin: 0 auto 84px;
  text-align: left;
}
</style>
