<template>
  <div class="container">
    <div class="row">
      <div class="div-style col-xl-4 col-lg-4 col-md-6 col-sm-12"></div>
      <div class="div-style col-xl-4 col-lg-4 col-md-6 col-sm-12"></div>
      <div class="div-style col-xl-4 col-lg-4 col-md-12 col-sm-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.div-style {
  border: 1px solid red;
  height: 100px;
}
</style>
