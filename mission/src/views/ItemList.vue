<template>
  <ItemListHeader />

  <main id="item-list">
    <ItemListCard v-for="item in items" :key="item.id" :item="item" />
  </main>

  <ItemListFooter />
</template>

<script>
import itemListData from '@/assets/itemListData';
import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListCard from '@/components/ItemList/Card.vue';
import ItemListFooter from '@/components/ItemList/Footer.vue';

export default {
  name: 'ItemList',

  components: {
    ItemListHeader,
    ItemListCard,
    ItemListFooter,
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
  margin: 0 auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
