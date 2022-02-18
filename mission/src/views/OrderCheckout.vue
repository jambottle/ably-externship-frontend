<template>
  <main id="order-checkout" data-test="order-wrapper">
    <h3>🧾 주문/결제</h3>

    <h4>주문 목록</h4>
    <hr />
    <ul>
      <li
        v-for="item in cartList"
        :key="item.product_no"
        data-test="order-item"
      >
        ▸ {{ item.name }} / 1EA / {{ item.price.toLocaleString() }}원<br />
      </li>
    </ul>
    <p>
      💰 총 결제 금액: <strong>{{ cartTotalPrice.toLocaleString() }}원</strong>
    </p>

    <h4>결제 정보</h4>
    <hr />
    <Form @submit="onSubmit" data-test="order-form">
      <label>
        이름<br />
        <Field type="text" name="username" :rules="validateText" />
        <br /><ErrorMessage name="username" />
      </label>

      <label>
        연락처<br />
        <Field type="text" name="contact" :rules="validateContact" />
        <br /><ErrorMessage name="contact" />
      </label>

      <label>
        배송지 주소<br />
        <Field type="text" name="address" :rules="validateText" />
        <br /><ErrorMessage name="address" />
      </label>

      <label>
        배송 방법<br />
        <Field type="radio" name="shipping" value="package" />
        <span>택배</span>
        <Field type="radio" name="shipping" value="courier" />
        <span>퀵 배송</span>
      </label>

      <label>
        결제 방법<br />
        <Field type="radio" name="payment" value="card" />
        <span>신용/체크카드</span>
        <Field type="radio" name="payment" value="cash" />
        <span>계좌이체</span>
      </label>

      <router-link to="/order/complete" data-test="order-router">
        <button
          class="w3-lightgray w3-large w3-round-large w3-border-0 w3-padding"
        >
          <strong>💳 결제하기</strong>
        </button>
      </router-link>
    </Form>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Field, Form, ErrorMessage } from 'vee-validate';

const { mapState, mapGetters } = createNamespacedHelpers('cart');

export default {
  name: 'OrderCheckoutPage',

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['cartTotalPrice']),
  },

  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },
    validateText(value) {
      if (!value || value.trim() === '') {
        return '이 항목은 필수 입력 항목입니다.';
      }
      return true;
    },
    validateContact(value) {
      if (!value) {
        return '이 항목은 필수 입력 항목입니다.';
      }
      const regex = /^\d{3}-\d{3,4}-\d{4}$/;
      if (!regex.test(value)) {
        return '010-0000-0000의 형태로 입력 바랍니다.';
      }
      return true;
    },
  },
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

  h3 {
    position: relative;
    left: -10px;

    width: calc(100% + 10px);
    margin-bottom: 8px;
    padding: 2px 8px;

    background-color: orange;
    color: white;
    font-weight: 600;
  }

  h4 {
    margin-bottom: 8px;
    font-weight: 600;
  }

  hr {
    margin: 0 0 10px;
  }

  ul {
    margin-bottom: 10px;

    li {
      font-size: 18px;
    }
  }

  p {
    font-size: 18px;

    strong {
      font-weight: bold;
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
          margin: 2px 0;
          border: 1px solid darkgray;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 16px;
          font-weight: normal;
        }

        &[type='radio'] {
          margin: 10px 5px;
        }
      }

      span {
        margin-right: 10px;
        font-weight: normal;

        &[role='alert'] {
          color: darkblue;
          font-size: 14px;
        }
      }
    }

    a {
      width: 100%;
      max-width: 125px;
      margin: 0 auto;
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
}
</style>
