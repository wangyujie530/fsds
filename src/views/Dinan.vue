<template>
    <div class="sdenlu">
        <router-view></router-view>
          <Herder>
           
             <van-nav-bar slot="nave_s" class="headerd" fixed>
            <template #title >
               <span style="color:#ffffff;">订单列表</span>
            </template>
             
             </van-nav-bar>
        </Herder>
        <a  class="denlu" @click="anniu">立即登录</a>
        
    </div>
</template>

<script>
import Herder from './../components/heder/Heade'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        anniu(){
            this.$router.push("/Denglu")
        }
    },
    components: {
        Herder,
    },
};
</script>

<style scoped lang="less">
.sdenlu{
    .denlu{
        display: block;
        height: .39rem;
        width: .96rem;
        background-color: #02a774;
        color: white;
        font-size: .14rem;
        text-align: center;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        line-height: .39rem;
        
    }
}
</style>
