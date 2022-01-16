<template>
  <main id="item-info">
    <figure class="item-info-header">
      <div
        class="item-profile"
        data-test="item-profile"
        :style="`background-image: url(${itemProfile})`"
      />
      <figcaption id="shop">
        <div
          class="shop-profile"
          data-test="shop-profile"
          :style="`background-image: url(${shopProfile})`"
        />
        <div class="shop-caption">
          <b data-test="shop-name">{{ shopName }}</b>
          <br />
          <span v-for="tag in shopTags" :key="tag" data-test="shop-tags">
            #{{ tag }}&nbsp;
          </span>
        </div>
        <span class="shop-startag">☆</span>
      </figcaption>
    </figure>

    <section class="item-info-body">
      <h2 data-test="item-name">{{ itemName }}</h2>
      <p>
        <b data-test="discount-rate"> {{ Math.round(discountRate) }}% </b>
        <span data-test="discount-price">
          {{ itemPrice.discount.toLocaleString() }}원
        </span>
        <del data-test="original-price">
          {{ itemPrice.original.toLocaleString() }}원
        </del>
      </p>

      <h4>상품정보</h4>
      <p v-html="itemDesc" data-test="item-desc" />

      <h4>리뷰</h4>
      <article id="review" v-for="review in reviews" :key="review.id">
        <div class="review-post">
          <b data-test="review-name">{{ review.userName }}</b>
          <span data-test="review-date">{{ review.postDate }}</span>
          <h6 data-test="review-title">{{ review.postTitle }}</h6>
          <p data-test="review-content">{{ review.postContent }}</p>
        </div>
        <div
          class="review-photo"
          data-test="review-photo"
          :style="`background-image: url(${review.postPhoto})`"
        />
      </article>
    </section>

    <footer class="item-info-footer" data-test="footer-wrapper">
      <button
        class="w3-round-large w3-black w3-xlarge w3-padding-small"
        data-test="footer-button"
      >
        <strong>{{ itemPrice.discount.toLocaleString() }}</strong
        >원 구매
      </button>
    </footer>
  </main>
</template>

<script>
import itemData from '../assets/itemData';
import reviewData from '../assets/reviewData';

export default {
  name: 'ItemInfo',

  data() {
    return {
      ...itemData,
      reviews: reviewData,
    };
  },

  computed: {
    discountRate() {
      return 100 - (this.itemPrice.discount / this.itemPrice.original) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
#item-info {
  width: 100%;
  max-width: 512px;
  margin: 0 auto;

  .item-info-header {
    margin: 0;

    .item-profile {
      position: relative;
      width: 100%;
      background-position: center;
      background-size: cover;

      &:after {
        display: block;
        padding-bottom: 100%;
        content: '';
      }
    }

    #shop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid lightgray;
      padding: 12px 16px;

      .shop-profile {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
      }

      .shop-caption {
        margin: 0 auto 0 12px;
        font-size: 16px;
        text-align: left;

        b {
          font-weight: bold;
        }
      }

      .shop-startag {
        font-size: 32px;
        cursor: pointer;
      }
    }
  }
}

.item-info-body {
  margin-bottom: 84px;
  padding: 6px 16px 0;
  text-align: left;

  h4 {
    margin-top: 32px;
  }

  p {
    font-size: 18px;

    b {
      color: red;
      font-size: 21px;
      font-weight: bold;
    }

    span {
      color: black;
      font-size: 21px;
    }

    del {
      color: gray;
      font-size: 16px;
    }
  }

  #review {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .review-post {
      width: 64%;
      font-size: 16px;

      span {
        margin-left: 8px;
        color: gray;
        font-size: 15px;
        vertical-align: top;
      }

      h6 {
        margin: 2px 0;
        font-size: 18px;
        font-weight: bold;
      }

      p {
        font-size: 16px;
      }
    }

    .review-photo {
      width: 120px;
      height: 120px;
      border: 1px solid lightgray;
      background-position: center;
      background-size: cover;
    }
  }
}

.item-info-footer {
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 512px;
  border-top: 1px solid lightgray;
  background: white;

  button {
    display: block;
    margin: 8px auto;
    border: 0;
    box-shadow: 4px 4px lightgray;
    cursor: pointer;

    strong {
      font-weight: bold;
    }
  }
}
</style>
