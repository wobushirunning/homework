<template>
  <div class="main">
    <div class="header">
      <Header></Header>
    </div>
    <div class="body">
      <div class="container body-style">
        <div class="row content">
          <div class="left-main col-xl-3 col-lg-3 left-content">
            <Navigation></Navigation>
          </div>
          <div class="right-main col-xl-9 col-lg-9 col-md-12 col-sm-12 right-content">
            <CountPanel></CountPanel>
            <FilterBar></FilterBar>
            <ContentPanel></ContentPanel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentPanel from "../components/ContentPanel";
import CountPanel from "../components/CountPanel";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
export default {
  name: "HelloWorld",
  components: {
    ContentPanel,
    CountPanel,
    FilterBar,
    Header,
    Navigation
  }
};
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  flex: 1;
  display: flex;
  flex-direction: column;
  .header {
    flex: 0 1 60px;
  }
  .body {
    flex: 1;
    .body-style {
      width: 100%;
      height: 100%;
      justify-content: center;
      .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        .right-content {
          flex: 1;
          // display: flex;
          // flex-direction: column;
        }
      }
    }
  }
}
</style>
