<template>
  <div class="bar-main container">
    <div class="row search-lg-show">
      <div class="col-sm-12 bar-style">
        <div class="input-new-style">
          <input type="text" class="input-style" style="width: 100%;">
          <i class="icon-search icon-search-style"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 bar-style bar-border-style" :class="[ selType === item ? 'bar-btm-style' : '' ]" v-for="item in typeList" :key="item" @click="selType = item">{{ item }}</div>
      <div class="col-xl-4 col-lg-5 col-md-6 search-sm-show bar-style">
        <div class="input-new-style">
          <input type="text" class="input-style">
          <i class="icon-search icon-search-style"></i>
        </div>
      </div>
      <div class="col-xl-2 col-lg-1 list-md-show bar-style">
        <i v-for="item in iconList" :key="item.icon" :class="[ item.icon, showType === item.value ? 'icon-color' : '' ]" class="icon-style" @click="showType = item.value"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      typeList: ['All', 'Physical', 'Virtual'],
      selType: 'All',
      showType: 'list',
      iconList: [
        {
          icon: 'icon-th-card',
          value: 'card'
        },
        {
          icon: 'icon-th-list',
          value: 'list'
        }
      ]
    }
  }
};
</script>

<style scoped lang="less">
.bar-main {
  .row {
    padding: 10px;
    .bar-border-style {
      border-left: 1px solid #e1e4e6;
    }
    .bar-style {
      height: 50px;
      line-height: 50px;
      background: #fff;
      cursor: pointer;
      .icon-style {
        display: inline;
        font-size: 20px;
        padding-right: 16px;
      }
      .icon-color {
        color: #00b4cf;
      }
      .input-new-style {
        position: relative;
        padding: 5px;
        input[type="text"]{
          box-sizing: border-box;
          font-size:14px;
          height:40px;
          line-height: 50px;
          border:1px solid #f3f3f3;
          background-color: #f3f3f3;
          -web-kit-appearance:none;
          -moz-appearance: none;
          display:block;
          outline:0;
          padding: 0 5px 0 34px;
          text-decoration:none;
        }
        .icon-search-style {
          position: absolute;
          left: 15px;
          top: 15px;
          font-size: 20px;
        }
      }
    }
    .bar-btm-style {
      color: #00b4cf;
      border-bottom: 3px solid #00b4cf;
    }
  }
}
</style>
