<template>
    <div>
       <Herder>
             <van-nav-bar slot="nave_s" class="headerd" fixed>
            <template #left >
                <van-icon name="search" color="#ffffff" size=".2rem"/>
            </template>
            <template #title >
               <span style="color:#ffffff;">{{name.name}}</span>
            </template>
             <template #right >
                <van-icon name="user-circle-o" color="#ffffff" size=".2rem"/>
            </template>
             </van-nav-bar>
        </Herder>
        
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#02a774" show-indicators>
            <van-swipe-item>
                <ul class="uls_s">
            <li v-for="(item,index) in list.slice(0,8) "  :key="index" class="uls_s_li">
                <img :src="'//fuss10.elemecdn.com'+item.image_url" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
            </van-swipe-item>
            <van-swipe-item>
                <ul class="uls_s">
            <li v-for="(item,index) in list.slice(8,16) "  :key="index" class="uls_s_li">
                <img :src="'//fuss10.elemecdn.com'+item.image_url" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
            </van-swipe-item>
        </van-swipe>
        <Home>
        </Home>
    </div>
</template>

<script>
import Herder from './../components/heder/Heade'
import Home from './Home'
export default {
    props: {

    },
    data() {
        return {
            list:[],
            name:{},
        };
    },
    mounted(){
         this.axios.get('/api/index_category').then(res=>{
                this.list=res.data.data
            })
            this.axios.get('/api/position/40.10038,116.36867').then(res=>{
                this.name=res.data.data
                this.$store.state.name= this.name
            })
        
    },
    methods: {
       
    },
    components: {
      Herder,
      Home
    },
};
</script>

<style scoped lang="less">
.uls_s{
   border-bottom: 1px solid #f1f1f1;
    height: 190px;
    font-size: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .uls_s_li{
         width: 25%;
        height: .65rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        &>img{
            width: .45rem;
            height: .45rem;
        }
        &>span{
            font-size: .14rem;
        }
    }
}

</style>

