<template>
  <aside id="order-complete">
    <span>✅<br />주문이 완료되었습니다.</span>

    <router-link to="/">
      <button
        class="w3-lightgray w3-large w3-round-large w3-border-0 w3-padding"
        data-test="home-button"
      >
        <strong>🏠 처음으로</strong>
      </button>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'OrderCompletePage',
};
</script>

<style lang="scss" scoped>
#order-complete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 512px;
  margin: 0 auto 84px;
  padding: 200px 0;

  span {
    font-size: 21px;
    text-align: center;
  }

  a {
    width: 100%;
    max-width: 125px;
    margin: 15px auto 0;
    text-decoration: none;

    button {
      display: block;
      margin: 8px auto;
      border: 0;
      box-shadow: 4px 4px lightgray;
      cursor: pointer;

      strong {
        font-weight: 600;
      }
    }
  }
}
</style>
