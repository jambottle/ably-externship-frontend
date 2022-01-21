<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RotateText />
  </div>
</template>

<script>
import HelloWorld from '@/components/Home/HelloWorld.vue';
import RotateText from '@/components/Home/RotateText.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    RotateText,
  },
};
</script>
