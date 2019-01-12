<template>
  <div class="header">
    <div class="container content">
      <div class="row row-style">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-style">
          <i class="icon-navicon head-menu"></i>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-style">
          <span class="logo-style"></span>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-style">
          <div class="user-style">
            <div class="summary-style" @click="menuState = !menuState">
              <img class="avator-style" src="../assets/icon/avatar.jpg" height="40" width="40">
              <span class="dropdown-style" :class="[menuState ? 'icon-angle-up' : 'icon-angle-down']"></span>
            </div>
            <div class="menu-style" v-show="menuState">
              <ul>
                <li v-for="item in menuList" :key="item.name" class="li-style">
                  <div class="li-icon-style">
                    <i :class="item.icon" class="icon-style"></i>
                  </div>
                  <div class="li-text-style">
                    {{ item.name }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuList: [
        {
          name: "Profile",
          icon: "icon-id-card"
        },
        {
          name: "Sign Out",
          icon: "icon-sign-in"
        }
      ],
      menuState: false
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  background-color: #ffff;
  .content {
    height: 60px;
    .row-style {
      height: 60px;
      .col-style {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        i {
          font-size: 20px;
        }
        .logo-style {
          display: inline-block;
          height: 40px;
          width: 100px;
          background-size: 100px 40px;
          background-image: url("../assets/logo.svg")
        }
        .user-style {
          position: relative;
          .summary-style {
            .avator-style {
              border-radius: 50%;
              display: inline-block;
              vertical-align: middle;
            }
            .dropdown-style {
              margin-left: 6px;
              display: inline-block;
              vertical-align: middle;
            }
          }
          .menu-style {
            width: 120px;
            background: #fff;
            padding: 6px 0;
            margin-top: 8px;
            position: absolute;
            z-index: 100;
            .li-style {
              height: 30px;
              line-height: 30px;
              .li-icon-style {
                display: inline-block;
                width: 30%;
                i {
                  font-size: 14px;
                }
              }
              .li-text-style {
                display: inline-block;
                width: 70%;
                padding-left: 6px;
                text-align: left;
              }
              &:hover {
                background-color: #efefef;
              }
            }
          }
        }
      }
    }
  }
}
</style>
