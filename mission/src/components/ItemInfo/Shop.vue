<template>
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
        #{{ tag }}
      </span>
    </div>
    <div
      class="shop-liketag"
      :class="shop.isLiked ? 'active' : ''"
      @click="$emit('toggleLike')"
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
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export default {
  name: 'ItemInfoShop',

  components: {
    FontAwesomeIcon,
  },

  props: {
    shop: Object,
  },

  data() {
    return {
      icon: {
        liked: fasHeart,
        unliked: farHeart,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
