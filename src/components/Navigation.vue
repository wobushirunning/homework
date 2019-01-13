<template>
  <div class="nav-style nav-width-style">
    <div class="nav">
      <div class="close-icon close-show" @click="closeMenu">
        <i class="icon-close"></i>
      </div>
      <div class="nav-list">
        <div class="nav-list-item" v-for="item in navList" :key="item.name" @click="activeItem = item.name" :class="activeItem === item.name ? 'active-style' : ''">
          <div class="nav-icon" :class="item.icon"></div>
          <div class="nav-text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="history">
      <div class="history-title">History</div>
      <div class="history-list" v-for="item in historyList" :key="item">
        <div class="item-icon"></div>
        <div class="item-text">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeItem: 'AGENT',
      historyList: [
        'bjstdmngbdr02/Acceptance_test',
        'bjstdmngbdr03/Acceptance_test',
        'bjstdmngbdr04/Acceptance_test',
        'bjstdmngbdr05/Acceptance_test',
        'bjstdmngbdr06/Acceptance_test',
        'bjstdmngbdr07/Acceptance_test',
        'bjstdmngbdr08/Acceptance_test',
        'bjstdmngbdr09/Acceptance_test',
        'bjstdmngbdr10/Acceptance_test',
        'bjstdmngbdr11/Acceptance_test',
        'bjstdmngbdr12/Acceptance_test',
        'bjstdmngbdr13/Acceptance_test'
      ],
      navList: [
        {
          icon: 'icon-dashboard',
          name: 'DASHBOARD'
        },
        {
          icon: 'icon-sitemap',
          name: 'AGENT'
        },
        {
          icon: 'icon-boat',
          name: 'MY CRUISE'
        },
        {
          icon: 'icon-life-bouy',
          name: 'HELP'
        }
      ]
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenuEmit')
    }
  }
};
</script>

<style scoped lang="less">
.nav-style {
  height: 100%;
  padding: 30px 0 10px 0;
  background-color: #2d4054;
  .nav {
    height: 60%;
    position: relative;
    .close-icon {
      font-size: 16px;
      color: #00b4cf;
      position: absolute;
      width: 16px;
      height: 16px;
      right: 12px;
      top: -18px;
      cursor: pointer;
    }
    .nav-list {
      .nav-list-item {
        height: 45px;
        font-size: 20px;
        color: #fff;
        padding: 6px 26px;
        cursor: pointer;
        display: flex;
        align-items: center;
        .nav-icon {
          float: left;
        }
        .nav-text {
          padding-left: 26px;
          float: left;
        }
        &:hover {
          background-color: #435466;
          color: #00b4cf;
        }
      }
      .active-style {
        background-color: #435466;
        color: #00b4cf;
      }
    }
  }
  .history {
    height: 40%;
    padding: 10px;
    text-align: left;
    .history-title {
      padding: 10px 0;
      font-size: 24px;
      color: #ccc;
    }
    .history-list {
      height: 24px;
      display: flex;
      align-items: center;
      &:hover {
        .item-icon {
          background-color: #00b4cf;
        }
        .item-text {
          color: #00b4cf;
        }
      }
      .item-icon {
        width: 4px;
        height: 4px;
        background-color: #999;
        float: left;
        border-radius: 50%;
        margin-right: 16px;
      }
      .item-text {
        float: left;
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
