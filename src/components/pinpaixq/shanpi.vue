<template>
  <div>
    <div class="ul_sd">
      <div class="di_s2">
        <span class="ye_S">4.2</span>
        <span class="yccc">综合评分</span>
        <p class="hhhs">高于周边商家99%</p>
      </div>
      <div class="ddis_s">
        <div class="padds">
          <div class="paddi2">
            <!-- <Xing> </Xing>
            <Xing> </Xing> -->
            <div>
              <div>
                <p>
                  <van-rate
                    v-model="value"
                    allow-half
                    void-icon="star"
                    color='#ff9900'
                    void-color="#eee"
                    size="12"
                  />
                  <span>服务态度</span>
                  <span style="color:#ff9900">4.3</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <van-rate
                    v-model="value"
                    allow-half
                    void-icon="star"
                    color='#ff9900'
                    void-color="#eee"
                    size="12"
                  />
                  <span>服务态度</span>
                  <span style="color:#ff9900">4.3</span>
                </p>
              </div>
            </div>
          </div>
          <span>送达时间</span><span>28分钟</span>
        </div>
      </div>
    </div>
    <div>
      <div class="border">
        <div class="ceads">
          <div class="const">
            <span>全部24</span>
            <span>满意18</span>
            <span>不满意6</span>
          </div>
          <div class="fuju">
            <van-icon name="checked" color="#02a774" size=".2rem" /><span
              class="daxi"
              >只看头内容的评价</span
            >
          </div>
        </div>
      </div>
      <ul>
        <li v-for="(item, index) in lists" :key="index" class="lis_s">
          <div class="padds_s">
            <img :src="item.avatar" alt="" class="img_siz" />
          </div>
          <div class="whsa">
            <div>
              <p class="float_s">
                <span>{{ item.username }}</span
                ><span>2016-07-23 21:52:44</span>
              </p>
              <p>{{ item.deliveryTime }}</p>
              <p>{{ item.text }}</p>
            </div>
            <van-icon name="like" color='red'/>
            <span
              v-for="(ite, inde) in item.recommend"
              :key="inde"
              class="kuais_s"
              >{{ ite }}</span
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Xing from "./xianqing";
export default {
  props: {},
  data() {
    return {
      value: 4.2,
      lists: this.$store.state.list.ratings,
    };
  },
  mounted() {
    console.log(this.lists);
  },
  methods: {},
  components: {
    Xing,
  },
};
</script>

<style scoped lang="less">
.ul_sd {
  height: 0.8rem;
  .di_s2 {
    border-right: 1px solid #e6e7e8;
    flex: 1;
    padding: 0.15rem 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .ye_S {
      font-size: 0.2rem;
      color: #ff9900;
    }
    .yccc {
      font-size: 0.12rem;
      color: #07111b;
    }
    .hhhs {
      font-size: 0.12rem;
      color: #93999f;
    }
  }
  font-size: 0.12rem;
  display: flex;
  .ddis_s {
    width: 2.36rem;
    .padds {
      .paddi2 {
        padding: 0.1rem;
      }
      padding: 0.15rem 0.2rem;
    }
  }
  margin: 0.2rem 0;
}
.img_siz {
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
}
.lis_s {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-evenly;
  height: 1.57rem;
  font-size: 0.14rem;
}
.whsa {
  width: 3rem;
}
.padds_s,
.whsa {
  padding:.2rem 0 0  0;
}
.float_s {
  & > span:last-child {
    float: right;
  }
}
.kuais_s {
  font-size: 0.1rem;
  margin: 0  .45rem 0rem 0;
  color: #ccc;
  border: 1px solid #ccc;
}
.const {
  font-size: 0.14rem;
  display: flex;
  & > span {
    background-color: #dbdddf;
    margin-right: 0.1rem;
    padding: 0.05rem;
  }
  &>span:first-child{
    color: white;
    background-color: #02a774;
  }
}
.fuju {
  margin-top: 0.3rem;
}
.daxi {
  font-size: 0.12rem;
}
.ceads {
  padding: 0.1rem;
  font-size: 0;
}
.border {
  border-top: 10px solid #f3f5f7;
  border-bottom: 1px solid #ccc;
}
</style>
