<template>
  <nav id="footer" data-test="footer-wrapper">
    <router-link v-for="link in links" :key="link.id" :to="link.url">
      <FontAwesomeIcon :icon="link.icon" /><br />
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faBookmark,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'ItemListFooter',

  components: {
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
#footer {
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
  margin: 0 auto;
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
</style>
