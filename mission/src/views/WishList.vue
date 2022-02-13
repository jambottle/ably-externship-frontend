<template>
  <main id="wish-list">
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

const WishRepository = Repository.get('wish');

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
    async getWishList() {
      try {
        const { data, status } = await WishRepository.getWishList();
        if (status !== 200) {
          throw new Error('찜한 상품의 목록을 조회할 수 없습니다.');
        } else {
          this.items = data.items;
        }
      } catch (err) {
        console.error(err);
      }
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
  margin: 0 auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
