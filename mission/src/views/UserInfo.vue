<template>
  <main id="user-info">
    <ItemListCard :key="user.id" :name="user.username" :mail="user.email" />
  </main>
</template>

<script>
import ItemListCard from '@/components/ItemList/Card.vue';
import Repository from '@/repositories/RepositoryFactory';

const WishRepository = Repository.get('info');

export default {
  name: 'UserInfoPage',

  components: {
    ItemListCard,
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    async getUserInfo() {
      const { data } = await WishRepository.getUserInfo();
      this.user = data;
    },
  },

  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
#user-info {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 512px;
  margin: 0 auto 84px;
  padding: 6px 0 0 16px;
  text-align: left;
}
</style>
