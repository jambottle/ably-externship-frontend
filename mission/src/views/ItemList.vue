<template>
  <main id="item-list">
    <ItemListCard
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :desc="item.desc"
      :price="item.price"
      :profile="item.profile"
    />
  </main>
</template>

<script>
import ItemListCard from '@/components/ItemList/Card.vue';
import itemListData from '@/assets/itemListData';

export default {
  name: 'ItemList',

  components: {
    ItemListCard,
  },

  data() {
    return {
      items: itemListData,
    };
  },
};
</script>

<style lang="scss" scoped>
#item-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 512px;
  margin: 61px auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
