<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- 1주차 미션: 간단한 문자열 회전 기능 구현해보기 -->
    <input type="text" v-model="inputValue" />
    <button @click="handleInput">제출</button>
    <button @click="alertInput">알림</button>
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },

  data() {
    return {
      inputValue: "",
      click: 0,
    };
  },

  methods: {
    handleInput() {
      const str1 = this.inputValue.slice(1);
      const str2 = this.inputValue.slice(0, 1);
      this.inputValue = str1 + str2;
    },
    alertInput() {
      this.click += 1;
      alert(`${this.inputValue} ${this.click}`);
    },
  },
};
</script>
