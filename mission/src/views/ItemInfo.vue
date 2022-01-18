<template>
  <main id="item-info">
    <figure class="item-info-header">
      <div
        class="item-profile"
        data-test="item-profile"
        :style="`background-image: url(${item.profile})`"
      />
      <figcaption id="shop">
        <div
          class="shop-profile"
          data-test="shop-profile"
          :style="`background-image: url(${shop.profile})`"
        />
        <div class="shop-caption">
          <b data-test="shop-name">{{ shop.name }}</b>
          <br />
          <span
            v-for="(tag, index) in shop.tags"
            :key="index"
            data-test="shop-tags"
          >
            #{{ tag }}&nbsp;
          </span>
        </div>
        <div
          class="shop-liketag"
          :class="shop.isLiked ? 'active' : ''"
          @click="toggleLike"
          data-test="shop-liketag"
        >
          <FontAwesomeIcon
            v-if="shop.isLiked"
            :icon="icon.liked"
            data-test="like-clicked"
          />
          <FontAwesomeIcon v-else :icon="icon.unliked" />
        </div>
      </figcaption>
    </figure>

    <section class="item-info-body">
      <h2 data-test="item-name">{{ item.name }}</h2>
      <p v-if="item.price.discount !== item.price.original">
        <b data-test="discount-rate"> {{ discountRate }}% </b>
        <span data-test="discount-price"> {{ discountPrice }}원 </span>
        <del data-test="original-price"> {{ originalPrice }}원 </del>
      </p>
      <p v-else>
        <span data-test="original-price"> {{ originalPrice }}원 </span>
      </p>

      <h4>상품정보</h4>
      <p v-html="item.desc" data-test="item-desc" />

      <h4>리뷰 ({{ reviews.length }})</h4>
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
        @click="showModal"
        data-test="footer-button"
      >
        <strong>{{ discountPrice }}</strong
        >원 구매
      </button>
    </footer>

    <transition name="modal">
      <Modal v-if="isModalShown" @close="isModalShown = false">
        <template v-slot:header>
          <h6>상품이 장바구니에 담겼습니다!</h6>
        </template>
        <template v-slot:body>
          <p><b>상품명:</b> {{ item.name }}</p>
          <p><b>가격:</b> {{ discountPrice }}원</p>
        </template>
      </Modal>
    </transition>
  </main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import itemData from '@/assets/itemData';
import reviewData from '@/assets/reviewData';
import Modal from '@/components/Modal.vue';

export default {
  name: 'ItemInfo',

  components: {
    FontAwesomeIcon,
    Modal,
  },

  data() {
    return {
      ...itemData,
      reviews: reviewData,
      icon: {
        liked: fasHeart,
        unliked: farHeart,
      },
      isModalShown: false,
    };
  },

  computed: {
    discountRate() {
      const rate = 1 - this.item.price.discount / this.item.price.original;
      return Math.round(rate * 100);
    },
    discountPrice() {
      return this.item.price.discount.toLocaleString();
    },
    originalPrice() {
      return this.item.price.original.toLocaleString();
    },
  },

  methods: {
    toggleLike() {
      this.shop.isLiked = !this.shop.isLiked;
    },
    showModal() {
      this.isModalShown = true;
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

      .shop-liketag {
        margin-right: 2px;
        font-size: 28px;
        opacity: 0.4;
        cursor: pointer;

        &.active {
          color: red;
          opacity: 1;
        }
      }
    }
  }

  .item-info-body {
    margin-bottom: 84px;
    padding: 6px 16px 0;
    text-align: left;

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
        font-weight: bold;
      }

      del {
        margin-left: 2px;
        color: gray;
        font-size: 16px;
      }
    }

    h4 {
      margin-top: 32px;
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

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.5s ease;
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
}
</style>
