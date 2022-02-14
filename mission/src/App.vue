<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from '@/components/App/Header.vue';
import AppFooter from '@/components/App/Footer.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },

  methods: {
    ...mapActions(['getCartList']),
  },

  created() {
    this.getCartList();
  },
};
</script>

<style>
@import './assets/scss/reset.scss';
@import './assets/scss/common.scss';

#app {
  width: 97.5%;
  margin: 61px 0;
  padding-left: 15px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
