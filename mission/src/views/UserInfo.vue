<template>
  <main id="user-info">
    <ItemListCard :key="user.id" :name="user.username" :mail="user.email" />
  </main>
</template>

<script>
import ItemListCard from '@/components/ItemList/Card.vue';
import Repository from '@/repositories/RepositoryFactory';

const UserRepository = Repository.get('info');

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
      try {
        const { data, status } = await UserRepository.getUserInfo();
        if (status !== 200) {
          throw new Error('현재 유저의 정보를 조회할 수 없습니다.');
        } else {
          this.user = data;
        }
      } catch (err) {
        console.error(err);
      }
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
