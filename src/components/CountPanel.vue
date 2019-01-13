<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-style">
        <div class="build-style">
          <div class="title-style">Building</div>
          <div class="icon-style icon-cog icon-sm-style" id="rotate-icon"></div>
          <div class="number-style">{{ count.building }}</div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-style">
        <div class="idle-style">
          <div class="title-style">Idle</div>
          <div class="icon-style icon-coffee icon-sm-style"></div>
          <div class="number-style">{{ count.idle }}</div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-style">
        <div class="count-style">
          <div class="count-xl-show count-show">
            <div class="xl-style">
              <div v-for="item in count.typeCount" :key="item.name" style="height: 100%;">
                <div class="top-title-style">{{ item.name }}</div>
                <div class="bottom-number-style">{{ item.count }}</div>
              </div>
            </div>
          </div>
          <div class="count-md-show count-show">
            <div class="md-style">
              <div v-for="item in count.typeCount" :key="item.name">
                <div class="left-title-style">{{ item.name }}</div>
                <div class="right-number-style">{{ item.count }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountPanel",
  props: {
    count: {
      type: Object,
      default: {
        building: 0,
        idle: 0,
        typeCount: [
          {
            name: "ALL",
            count: 0
          },
          {
            name: "PHYSICAL",
            count: 0
          },
          {
            name: "VIRTUAL",
            count: 0
          }
        ]
      }
    }
  }
};
</script>

<style scoped lang="less">
.panel-public {
  .title-style {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 10%;
    left: 5%;
  }
  .icon-style {
    font-size: 144px;
    opacity: 0.2;
    position: absolute;
    left: 20%;
    bottom: -5%;
  }
  .number-style {
    font-size: 48px;
    color: #fff;
    position: absolute;
    bottom: 0;
    right: 10px;
  }
}
.row {
  .col-style {
    height: 160px;
    padding: 10px;
    .build-style {
      width: 100%;
      height: 100%;
      background-color: #ff9a2a;
      position: relative;
      .panel-public;
    }
    .idle-style {
      width: 100%;
      height: 100%;
      background-color: #7fbc39;
      position: relative;
      .panel-public;
    }
    .count-style {
      width: 100%;
      height: 100%;
      background-color: #fff;
      .count-show {
        width: 100%;
        height: 100%;
        .xl-style {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          .top-title-style {
            height: 40%;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bottom-number-style {
            height: 60%;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .md-style {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .left-title-style {
            width: 60%;
            float: left;
            font-size: 12px;
          }
          .right-number-style {
            width: 40%;
            float: left;
            font-size: 20px;
          }
        }
      }
    }
  }
}
#rotate-icon {
  animation: loading 2s linear 0s infinite;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>
