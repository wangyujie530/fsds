<template>
    <div class="waim">
        <div class="tobu">
            <van-icon name="arrow-left" />
            蜂鸟外卖
        </div>
        <div class="xinsi">
            <router-link to="/Denglu/Dindl">短信登录</router-link>
            <router-link to="/Denglu/Mima">密码登录</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
     mounted() {
     this.$router.push('/Denglu/Dindl'); //    切换样式
     
   },
    methods: {
       
    },
    components: {

    },
};
</script>

<style scoped lang="less">

.waim{
    font-size: .12rem;
    color: #999999;
.tobu{
    .van-icon{
        font-size: .2rem;
        color: #9f9f9f;
        position: absolute;
        top: .07rem;
        left: .1rem;
    }
        height: 1.36rem;
        font-size: .38rem;
        font-weight: 900;
        color: #02a774;
        text-align: center;
        line-height: 1.46rem;
    }
    .xinsi{
        padding: 0 .8rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        a{
             padding: .07rem 0;
            color: #000;
            font-size: .14rem;
             border-bottom: .02rem solid #ffffff00;
        }
        &>.router-link-exact-active{
             border-bottom: .02rem solid #02a774;
             color: #02a774;
      }
    }
}
</style>
