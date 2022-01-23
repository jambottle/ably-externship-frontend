<template>
  <main id="item-list">
    <header class="item-list-header" data-test="header-wrapper">
      <h1>DefJam Streetwear</h1>
    </header>

    <section class="item-list-body">
      <ItemListCard v-for="card in 8" :key="card" />
    </section>

    <nav class="item-list-footer" data-test="footer-wrapper">
      <router-link v-for="link in links" :key="link.id" :to="link.url">
        <FontAwesomeIcon :icon="link.icon" /><br />
        {{ link.name }}
      </router-link>
    </nav>
  </main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faBookmark,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import ItemListCard from '@/components/ItemList/Card.vue';

export default {
  name: 'ItemList',

  components: {
    ItemListCard,
    FontAwesomeIcon,
  },

  data() {
    return {
      links: [
        {
          id: 1,
          icon: faHome,
          name: '홈',
          url: '/',
        },
        {
          id: 2,
          icon: faBookmark,
          name: '찜 목록',
          url: '/keep',
        },
        {
          id: 3,
          icon: faShoppingCart,
          name: '장바구니',
          url: '/cart',
        },
        {
          id: 4,
          icon: faUser,
          name: '마이 페이지',
          url: '/mypage',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#item-list {
  width: 100%;
  max-width: 512px;
  margin: 0 auto;

  .item-list-header {
    width: 100%;
    height: 61px;
    max-width: 512px;
    border-bottom: 1px solid lightgray;
    background: white;

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      line-height: 60px;
      text-align: center;
      vertical-align: middle;
    }
  }

  .item-list-body {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 84px;
    padding: 6px 0 0 16px;
    text-align: left;
  }

  .item-list-footer {
    position: fixed;
    z-index: 5;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 61px;
    max-width: 512px;
    border-top: 1px solid lightgray;
    background: white;

    a {
      width: 25%;
      height: 60px;
      padding: 10px 0;
      font-size: 12px;
      text-decoration: none;

      svg {
        margin: 2px 0;
        font-size: 18px;
      }
    }
  }
}
</style>
