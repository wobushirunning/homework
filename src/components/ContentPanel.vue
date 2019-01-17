<template>
  <div class="info-bar container">
    <div class="row">
      <div class="col-xl-2 bar-icon-style">
        <img :src="require(`../assets/icon/${infoData.os}.png`)" width="80" height="80">
      </div>
      <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 bar-info-style border-sm-style" :style="{ borderColor: infoData.status === 'building' ? '#ff9a2a' : '#7fbc39' }">
        <div class="row-style">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 icon-info-style info-sm-style">
                <i class="icon-desktop icon-size-style"></i>
                <span class="icon-text-style" style="color: #00b4cf;"> {{ infoData.name }} </span>
              </div>
              <div class="col-xl-1 col-lg-1 col-md-1 col-sm-status status-info-style" :style="{ background: infoData.status === 'building' ? '#ff9a2a' : '#7fbc39' }">{{ infoData.status }}</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 icon-info-style info-sm-style">
                <i class="icon-info icon-size-style"></i>
                <span class="icon-text-style"> {{ infoData.ip }} </span>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 icon-info-style info-sm-style">
                <i class="icon-folder icon-size-style"></i>
                <span class="icon-text-style"> {{ infoData.location }} </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row-style">
          <div class="container">
            <div class="row">
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 bottom-left-style bottom-smlf-style">
                <div class="list-left">
                  <i class="icon-plus icon-size-style" style="cursor: pointer;" @click="addModalShow = !addModalShow"></i>
                </div>
                <div class="modal-box" v-show="addModalShow">
                  <div class="modal-box-dialog">
                    <i class="icon-close modal-close-icon" @click="closeModal"></i>
                    <div class="modal-tip">Separate multiple resource name with commas</div>
                    <input v-model="addText" type="text" placeholder="Input value" autofocus="autofocus" class="modal-input-style">
                    <div class="modal-btn-add" @click="addAffirm">Add Resources</div>
                    <div class="modal-btn-cancel" @click="closeModal">Cancel</div>
                  </div>
                </div>
                <div class="list-right">
                  <div class="item-info">
                    <div class="item-style" v-for="(item, index) in infoData.resources" :key="`${item}${index}`">
                      <div class="item-text">{{ item }}</div>
                      <div class="del-icon icon-trash" @click="delResources(item)"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 bottom-right-style bottom-smrt-style" v-show="infoData.status === 'building'">
                <div class="deny-btn-style">
                  <i class="icon-deny icon-size-style"></i>
                  <span class="icon-text-style">Deny</span>
                </div>
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
  name: "ContentPanel",
  props: {
    infoData: {
      type: Object,
      default: {
        name: "",
        os: "",
        status: "",
        type: "",
        ip: "",
        location: "",
        src: "",
        resources: [],
        id: 1
      }
    }
  },
  data() {
    return {
      addModalShow: false,
      addText: ""
    }
  },
  methods: {
    delResources(item) {
      let arr = this.infoData.resources
      arr.splice(arr.indexOf(item), 1)
      this.$emit('editAgents', this.infoData)
    },
    addAffirm() {
      if (this.addText === '') return
      let add = this.addText.split(",")
      let arr = this.infoData.resources.concat(add)
      this.infoData.resources = arr
      this.$emit('editAgents', this.infoData)
      this.addModalShow = false
      this.addText = ""
    },
    closeModal() {
      this.addModalShow = false
      this.addText = ""
    }
  }
}
</script>

<style scoped lang="less">
.info-bar {
  position: relative;
  .row {
    height: 100%;
    padding: 10px;
    .bar-icon-style {
      height: 100%;
      padding: 15px;
      background-color: #fff;
    }
    .bar-info-style {
      height: 100%;
      background-color: #fff;
      border-left: 2px solid #fff;
      .row-style {
        height: 50%;
        .container {
          height: 100%;
          .row {
            height: 100%;
            padding: 0;
            .icon-info-style {
              padding: 20px 5px;
              position: relative;
              .icon-size-style {
                display: inline-block;
                width: 10%;
                text-align: left;
                font-size: 16px;
              }
              .icon-text-style {
                display: inline-block;
                width: 90%;
                text-align: left;
              }
            }
            .status-info-style {
              color: #fff;
              margin: 20px 0;
              position: relative;
              right: 15px;
            }
            .bottom-left-style {
              padding: 18px 5px;
              text-align: left;
              position: relative;
              bottom: 10px;
              .list-left {
                float: left;
                font-size: 16px;
                padding: 2px 4px 0 4px;
                background: #00b4cf;
                color: #fff;
                &:hover {
                  background-color: #01859a;
                }
              }
              .list-right {
                float: left;
                width: calc(100% - 21px);
                .item-info {
                  margin: 0 10px;
                  .item-style {
                    padding: 3px 9px;
                    margin: 0 6px;
                    background-color: #e1e4e6;
                    display: inline-block;
                    margin: 0 6px 6px 6px;
                    .item-text {
                      display: inline-block;
                      padding-right: 8px;
                    }
                    .del-icon {
                      cursor: pointer;
                      display: inline-block;
                    }
                  }
                }
              }
            }
            .bottom-right-style {
              position: relative;
              top: 8px;
              height: 30px;
              line-height: 30px;
              padding: 0 20px;
              .deny-btn-style {
                background-color: #00b4cf;
                color: #fff;
                width: 76px;
                float: right;
                cursor: pointer;
                &:hover {
                  background-color: #01859a;
                }
                .icon-text-style {
                  margin-left: 8px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
