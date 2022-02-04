<template>
  <header id="header" data-test="header-wrapper">
    <h1>DefJam Streetwear</h1>
  </header>
</template>

<script>
export default {
  name: 'ItemListHeader',
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 61px;
  max-width: 512px;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
  background: white;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
