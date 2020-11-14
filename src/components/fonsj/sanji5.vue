<template>
  <div class="nixs">
    <div v-for="(item, index) in lists.foods" :key="index" class="unsda">
      <div>
        <img :src="item.icon" alt="" class="img_S" />
      </div>

      <div class="fonsd">
        <p>{{ item.name }}</p>
        <p>{{ item.description }}</p>
        <p>
          <span>月销{{ item.sellCount }}份</span>&nbsp;&nbsp;<span
            >好评率{{ item.rating }}%</span
          >
        </p>
        <p>￥{{ item.price }}</p>
      </div>
      <div class="butnss">
        <div class="butns">
          <button @click="jiajia(index)">+</button>
        <span v-show="isover">{{ item.sellCounts }}</span>
          <button @click="jianjian(index)" v-show="isover">-</button>
        </div>
      </div>
      <van-goods-action>
          <van-goods-action-icon
            icon="cart-o"
            text="购物车"
            :badge="gesu"
            @click="showPopup"
            color="white"
          />
        <div class="sojia">
          <p>￥{{ zjge }}</p>
          <p>另需配送费￥4元</p>
        </div>
        <div class="ssdan">{{ texst }}</div>
      </van-goods-action>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }"  >
        <div v-for="(ites, indes) in listssd" :key="indes">
<div v-show="item.isov" v-for="(item, index) in ites.foods" :key="index" class="xia" >
            <div class="fonsd" >
          <p>{{ item.name }}</p>
          <p>￥{{ item.price }}</p>
        </div>
        <div class="butnss">
          <div class="butns">
            <button @click="jiajia(index)">+</button>
          <span v-show="isover">{{ item.sellCounts }}</span>
            <button @click="jianjian(index)" v-show="isover">-</button>
          </div>
        </div>
        </div>
        </div>
        <div style="height:300px">

        </div>
      </van-popup>
    <!-- <div>{{zjge}}</div> -->
  </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
  props: {},
  data() {
    return {
        listssd: this.$store.state.list.goods,
      show: false,
      lists: this.$store.state.list.goods[5],
      isover: false,
      texst: "￥20元起送",
    };
  },
  mounted() {
    console.log(this.$store.state.list.goods[5].foods);
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    jiajia(v) {
      this.$store.state.zons++
      this.texst="立即结算"
      this.lists.foods[v].isov=true
      this.isover = true;
       this.$store.state.zjge+=this.lists.foods[v].price
      this.lists.foods[v].sellCounts++;
    },
    jianjian(v) {
     
      
      if (this.lists.foods[v].sellCounts < 1) {
        this.lists.foods[v].sellCounts = 0;
        this.lists.foods[v].isov=false
        this.texst="￥20元起送"
        
      }else{
         this.$store.state.zons--
      this.lists.foods[v].sellCounts--;
        this.$store.state.zjge-=this.lists.foods[v].price
      }
    },
  },
  components: {},
  computed: {
       gesu(){
         if(this.$store.state.zons<1){
            this.$store.state.zons=0
          }
           return this.$store.state.zons
       },
    zjge() {
      return this.$store.state.zjge 
    },
  },
};
</script>

<style scoped lang="less">
.xia {
  display: flex;
}
.ssdan {
  background-color: #2b333b;
  color: white;
  font-size: 0.18rem;
  width: 1.05rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
}

.van-goods-action {
  z-index: 2100;
  background-color: #141d27;
}
.van-goods-action-icon {
  color: white;
  background-color: #141d27;
}
.nixs {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.unsda {
  display: flex;
  align-items: center;
  height: 1.14rem;
}
.img_S {
  width: 0.57rem;
  height: 0.57rem;
}
.fonsd {
  flex: 3;
  font-size: 0.12rem;
}
.butnss {
  font-size: 0.14rem;
  flex: 0.5;
}
.butns {
  display: flex;

  font-size: 0.18rem;
  text-align: center;

  button {
    background-color: #02a774;
    display: inline-block;
    color: white;
    width: 0.24rem;
    height: 0.24rem;
    border-radius: 50%;
  }
}
.sojia {
  width: 1.93rem;
  font-size: 0.12rem;
  color: #ccc;
}
</style>
