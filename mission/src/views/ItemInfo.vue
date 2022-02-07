<template>
  <main id="item-info">
    <figure class="item-info-header">
      <div
        class="item-profile"
        data-test="item-profile"
        :style="`background-image: url(${item.image})`"
      />
      <ItemInfoShop :shop="item.seller" @toggleLike="toggleLike" />
    </figure>

    <section class="item-info-body">
      <h2 data-test="item-name">{{ item.name }}</h2>
      <p v-if="isDiscounted">
        <b data-test="discount-rate">{{ discountRate }}%&nbsp;</b>
        <span data-test="discount-price">{{ discountPrice }}원&nbsp;</span>
        <del data-test="original-price">{{ originalPrice }}원</del>
      </p>
      <p v-else>
        <span data-test="discount-price">{{ discountPrice }}원</span>
      </p>

      <h4>상품정보</h4>
      <p v-html="item.description" data-test="item-desc" />

      <h4>리뷰 ({{ item.reviews.length }})</h4>
      <ItemInfoReview
        v-for="review in item.reviews"
        :key="review.review_no"
        :review="review"
      />
    </section>

    <footer class="item-info-footer" data-test="footer-wrapper">
      <button
        class="w3-round-large w3-black w3-xlarge w3-padding-small"
        data-test="footer-button"
        @click="showModal"
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
import ItemInfoShop from '@/components/ItemInfo/Shop.vue';
import ItemInfoReview from '@/components/ItemInfo/Review.vue';
import Modal from '@/components/Modal.vue';
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('item');

export default {
  name: 'ItemInfoPage',

  components: {
    ItemInfoShop,
    ItemInfoReview,
    Modal,
  },

  data() {
    return {
      item: {
        product_no: '',
        name: '',
        description: '',
        price: 0,
        original_price: 0,
        image: '',
        seller: {
          seller_no: 0,
          name: '',
          hash_tags: [],
          profile_image: '',
        },
        reviews: [],
      },
      isModalShown: false,
    };
  },

  computed: {
    isDiscounted() {
      return this.item.price !== this.item.original_price;
    },
    discountRate() {
      const rate = 1 - this.item.price / this.item.original_price;
      return Math.round(rate * 100);
    },
    discountPrice() {
      return this.item.price.toLocaleString();
    },
    originalPrice() {
      return this.item.original_price.toLocaleString();
    },
  },

  methods: {
    async getItemInfo() {
      const { itemNo } = this.$route.params;
      const { data } = await ItemRepository.getItemInfo(itemNo);
      this.item = data.item;
    },
    toggleLike() {
      this.item.seller.isLiked = !this.item.seller.isLiked;
    },
    showModal() {
      this.isModalShown = true;
    },
  },

  created() {
    this.getItemInfo();
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
  }

  .item-info-body {
    margin-bottom: 150px;
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
        font-weight: bold;
      }

      del {
        margin-left: 2px;
        color: gray;
        font-size: 16px;
      }
    }
  }

  .item-info-footer {
    position: fixed;
    z-index: 5;
    bottom: 61px;
    left: 50%;
    transform: translate(-50%, 0);

    width: 100%;
    height: 61px;
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
