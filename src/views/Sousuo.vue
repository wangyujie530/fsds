<template>
    <div>
         <Herder>
           
             <van-nav-bar slot="nave_s" class="headerd" fixed>
            <template #title >
               <span style="color:#ffffff;">搜索</span>
            </template>
             
             </van-nav-bar>
        </Herder>
          <div class="sous">
              <input type="text" class="inputs" v-model="keyword"><van-button color="#02a774" @click="denlu">搜索</van-button>
          </div>
        <ul class="sso">
            <li v-for="(item,index) in list" :key="index">
                <div>
                   <img :src="`https://elm.cangdu.org/img/${item.image_path}`" alt="">
                </div>
                <div>
                    <p>{{item.name}}</p>
                    <p>月售{{item.recent_order_num}}单</p>
                    <p>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Herder from './../components/heder/Heade'
export default {
    props: {

    },
    data() {
        return {
            // template: '<img :src="'//fuss10.elemecdn.com'+item.license.catering_service_license_image" alt="">',
            keyword :'',
            list:[]
        };
    },
    methods: {
        denlu(){
            this.axios.get('/api/search_shops?keyword='+this.keyword+'&geohash=40.10038,116.36867').then(res=>{
                console.log(res)
                this.list=res.data.data
            })
        }
    },
    components: {
        Herder
    },
};
</script>

<style scoped lang="less">
.sous{
    padding-top: .1rem;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .inputs{
        font-size: .14rem;
        color: #000;
        width: 75%;
         height: .46rem;
    border: .01rem solid #dddddd;
     border-radius: .03rem;
     padding-left: .1rem;
    }
    
}
.sso{
    font-size: .14rem;
    &>li{
        display: flex;
        align-items: center;
        &>div>img{
            width: .5rem;
            height: .5rem;
        }
    }
}
    
</style>
