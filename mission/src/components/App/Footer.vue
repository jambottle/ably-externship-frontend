<template>
  <nav id="footer" data-test="footer-wrapper">
    <router-link
      v-for="link in links"
      :key="link.id"
      :to="link.url"
      data-test="footer-router"
    >
      <FontAwesomeIcon
        :icon="link.icon"
        :data-test="`footer-router-${link.id}`"
        :style="{ color: setIconActive(link.url) }"
      />
      <br />
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import footerData from '@/assets/footerData';

export default {
  name: 'AppFooter',

  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      links: footerData,
    };
  },

  methods: {
    setIconActive(url) {
      return this.$route.path === url ? 'orange' : 'inherit';
    },
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
