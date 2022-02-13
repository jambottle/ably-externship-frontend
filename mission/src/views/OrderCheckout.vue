<template>
  <main id="order-checkout">
    <h3>주문/결제</h3>

    <h4>주문 목록</h4>
    <hr />
    <p>
      <span>핏이 좋은 수트 포함 1건 / 198,000원<br /></span>
      <span>핏이 좋은 수트 포함 1건 / 198,000원<br /></span>
      <span>핏이 좋은 수트 포함 1건 / 198,000원<br /></span>
    </p>

    <h4>결제 정보</h4>
    <hr />
    <form data-test="order-form">
      <label>
        이름<br />
        <input type="text" />
      </label>

      <label>
        연락처<br />
        <input type="text" />
      </label>

      <label>
        배송지 주소<br />
        <input type="text" />
      </label>

      <label>
        배송 방법<br />
        <input type="radio" name="shipping" value="package" />
        <span>택배</span>
        <input type="radio" name="shipping" value="courier" />
        <span>퀵 배송</span>
      </label>

      <label>
        결제 방법<br />
        <input type="radio" name="payment" value="card" />
        <span>신용/체크카드</span>
        <input type="radio" name="payment" value="cash" />
        <span>계좌이체</span>
      </label>
    </form>

    <router-link to="/order/complete">
      <button
        class="w3-lightgray w3-large w3-round-large w3-border-0 w3-padding"
        data-test="order-button"
      >
        <strong>💳 결제하기</strong>
      </button>
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'OrderCheckoutPage',
};
</script>

<style lang="scss" scoped>
#order-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 512px;
  margin: 0 auto 84px;
  padding: 12px 16px 0;
  text-align: left;

  h3,
  h4 {
    margin-top: 10px;
    font-weight: 600;
  }

  hr {
    margin: 0 0 10px;
  }

  p {
    margin-bottom: 10px;

    span {
      font-size: 18px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;

      font-size: 18px;
      font-weight: 600;
      line-height: 1.6;

      input {
        &[type='text'] {
          width: 80%;
        }

        &[type='radio'] {
          width: 5%;
          margin: 10px 5px;
        }
      }

      span {
        font-weight: normal;
      }
    }
  }

  a {
    width: 100%;
    max-width: 150px;
    margin: 5px auto 0;
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
