<template>
  <div class="main">
    <div class="header">
      <Header @openMenuEmit="openMenuEmit"></Header>
    </div>
    <div class="body">
      <div class="container body-style">
        <div class="row content">
          <div class="left-main col-xl-3 col-lg-3 left-content" ref="navShowRef">
            <Navigation @closeMenuEmit="closeMenuEmit"></Navigation>
          </div>
          <div class="right-main col-xl-9 col-lg-9 col-md-12 col-sm-12 right-content">
            <CountPanel :count="agentsCount"></CountPanel>
            <FilterBar></FilterBar>
            <div v-for="item in contentArr" :key="item.id">
              <ContentPanel :infoData="item" @editAgents="updateAgents"></ContentPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">© Copyright 2017 ThoughtWorks</div>
  </div>
</template>

<script>
import ContentPanel from "../components/ContentPanel";
import CountPanel from "../components/CountPanel";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
  name: "HelloWorld",
  components: {
    ContentPanel,
    CountPanel,
    FilterBar,
    Header,
    Navigation
  },
  data() {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  computed: {
    ...mapState({
      contentArr: state=>state.agentsData
    }),
    ...mapGetters(['agentsCount'])
  },
  created() {
    this.getAgents()
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (val >= 1024) {
        this.$refs.navShowRef.style.display = "block"
      } else {
        this.$refs.navShowRef.style.display = "none"
      }
    }
  },
  methods: {
    ...mapActions([
      'getAgents',
      'editAgents',
    ]),
    openMenuEmit() {
      this.$refs.navShowRef.style.display = "block"
    },
    closeMenuEmit() {
      this.$refs.navShowRef.style.display = "none"
    },
    updateAgents(data) {
      this.editAgents(data)
    }
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
      display: flex;
      justify-content: center;
      .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
        .right-content {
          flex: 1;
          // display: flex;
          // flex-direction: column;
        }
      }
    }
  }
  .footer {
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #2d4054;
    background-color: #fff;
  }
}
</style>
