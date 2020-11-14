<template>
    <div >
        <div class="boxs">
            <div class="flosa">
            <van-icon name="arrow-left" class="ssi" @click="fanhu"/>
            <img :src="this.ullist[v].image_path" alt="" class="diimg">
            <img :src="this.ullist[v].image_path" alt="" class="img_sd">

        </div>
        <div class="nabi_s" >
            <div class="divs_sd"><van-tag color="#ffe432" text-color="#6a3709" size="medium">品牌</van-tag><h1>{{this.ullist[this.v].name}}</h1><van-icon name="play" /></div>
            <p class="centp">{{this.ullist[this.v].rating}} 月售{{this.ullist[this.v].recent_order_num}}单 {{this.ullist[this.v].delivery_mode.text}} 约28分钟 距离约1000m</p>
            <div class="xiala">
                <p><van-tag type="success">首单</van-tag>新用户下单立减17元（不与其他活动同时使用）<span @click="showPopup">8个优惠</span><van-icon name="arrow-down" /></p>

            </div>
        </div>
        </div>
        <Foosnd></Foosnd>
        <router-view></router-view>
         <van-popup v-model="show" position="bottom" :style="{ height: '30%' }"  >
        <div >
            <h1 class="ffffd">优惠活动</h1>
            <div v-for="(item,index) in lists" :key="index" class="fonsa">
                <van-tag color="#ffe432" text-color="#6a3709" size="smail">{{item.name}}</van-tag><span>{{item.content}}</span>
            </div>
        </div>
       
      </van-popup>
    </div>
</template>

<script>
import Foosnd from './sstoo'
export default {
    props: {
        
    },
    data() {
        return {
            show: false,
                v:this.$store.state.indexz,
              ullist:this.$store.state.ullist,
               lists: this.$store.state.list.info.supports,
        };
    },
    mounted(){
    },
    methods: {
        showPopup() {
      this.show = true;
    },
    fanhu(){
        this.$router.push('/about')
    }
    },
    components: {
        Foosnd,
    },
};
</script>

<style scoped lang="less">
.nabi_s{
        display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
}
.ffffd{
    text-align: center;
    margin-left: .2rem;
}
.ffffd,.fonsa{
    
    font-size: .14rem;
}
.boxs{
    font-size: .14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.divs_sd{
    overflow: hidden;
    font-size: .2rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 .3rem;
    height: .3rem;
    line-height: .3rem;
}
.flosa{
    width: 100%;
    position: relative;
    padding-bottom: 30px;
}
.img_sd{
    position: absolute;
    top: .1rem;
    left: 50%;
    transform: translateX(-50%);
 padding:.1rem;
                height: .75rem;
                width: .73rem;
}
.diimg{
    height: .5rem;
    width: 100%;
    z-index: -1;
    float: left;
}
.centp{
    height: .24rem;
    line-height: .24rem;
    text-align: center;
}
.xiala{
    border: 1px solid #ccc;
    height: .23rem;
    line-height: .23rem;
    font-size: .12rem;

}
.ssi{
    position: absolute;
    font-size: .2rem;
    top: .15rem;
    left: .09rem;
}
</style>
