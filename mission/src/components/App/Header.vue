<template>
  <header
    id="header"
    data-test="header-wrapper"
    :class="hasScrolled ? 'hidden' : ''"
  >
    <router-link to="/" data-test="header-router">
      <h1>DefJam Streetwear</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {
      scrollPosition: 0,
    };
  },

  computed: {
    hasScrolled() {
      return this.scrollPosition !== 0;
    },
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  created() {
    window.addEventListener('scroll', this.updateScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  transition: top 0.2s ease-in-out;

  width: 100%;
  height: 61px;
  max-width: 512px;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
  background: white;

  a {
    text-decoration: none;

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      line-height: 60px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
    }

    &.hidden {
      top: -61px;
    }
  }
}
</style>
