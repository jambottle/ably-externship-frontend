<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- 1주차 미션 (기본): 간단한 문자열 회전 기능 구현해보기 -->
    <input type="text" v-model="inputText" />
    <button @click="rotateText">제출</button>
    <button @click="showModal">알림</button>
    <p>{{ inputText }}</p>

    <!-- 1주차 미션 (심화): 입력된 문자열과 버튼 클릭 횟수를 알림창에 띄우기 -->
    <Modal v-if="isModalShown" @close="isModalShown = false">
      <template v-slot:header>
        <h3>Result</h3>
      </template>
      <template v-slot:body>
        <p><b>Text:</b> {{ inputText }}</p>
        <p><b>Clicks:</b> {{ clicks }}</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Modal,
  },

  data() {
    return {
      inputText: "",
      isModalShown: false,
      clicks: 0,
    };
  },

  methods: {
    rotateText() {
      const str1 = this.inputText.slice(1);
      const str2 = this.inputText.slice(0, 1);
      this.inputText = str1 + str2;
    },
    showModal() {
      this.isModalShown = true;
      this.clicks += 1;
    },
  },
};
</script>
