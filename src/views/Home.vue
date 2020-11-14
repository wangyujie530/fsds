<template>
   <div class="ul_div">
            <div class="ul_div_one">
                <van-icon name="wap-nav" size='.14rem' /><span>附近商家</span>
            </div>
            <ul class="ul_div_ul">
                <li class="ul_div_ul_li" v-for="(item,index) in ullist" :key="index">
                    <div @click="tiaozs(index)">
                        <img :src="item.image_path" alt="">
                    </div>
                    <div>
                        <div><van-tag color="#ffd930" text-color="#333333">品牌</van-tag>{{item.name}}</div>
                        
                        <div>
                            <span><van-rate v-model="item.rating" allow-half :size="10" color="#ff9900"
                            void-icon="star"
                            void-color="#eee" />
  <span style="color:#ff6e17;">{{item.rating}}</span>月售{{item.recent_order_num}}单</span>
                        </div>
                        <p>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</p>
                    </div>
                    <div>
                        <div>
                            <van-tag plain color="#f1f1f1" text-color="#999999">保</van-tag><van-tag plain color="#f1f1f1" text-color="#999999">准</van-tag><van-tag plain color="#f1f1f1" text-color="#999999">票</van-tag>
                        </div>
                        <div><van-tag color="#4ec29e" plain>{{item.delivery_mode.text}}</van-tag></div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            latitude:'',
            ullist:[],
            longitude:''
        };
    },
    mounted(){
        this.latitude=this.$store.state.name.latitude
        this.longitude=this.$store.state.name.longitude
         this.axios.get("/api/shops?latitude="+ this.latitude+"&longitude="+this.longitude).then(res=>{
               this.ullist=res.data.data
               this.$store.state.ullist= this.ullist
               console.log(this.ullist)
            })   
    },
    methods: {
         tiaozs(v){
            this.$store.state.indexz=v;
            this.$router.push('/szctest1');
        }
    },
    components: {
      
    },
};
</script>

<style scoped lang="less">
.ul_div{
    .ul_div_one{
        font-size: 0;
        &>.van-icon {
            line-height: .38rem;
            margin: 0 .06rem 0 .11rem;
        }
        &>span{
            color: #a2a2a2;
        font-size: .14rem;
         line-height: .38rem;
        }
        height: .38rem;
        
       
        border-top: 1px solid #e4e4e4;
        margin-top: .1rem;
    }
    font-size: 0;
    .ul_div_ul{
        font-size: 0;
       
        .ul_div_ul_li{
             display: flex;
        align-items: center;
            font-size: .14rem;
            border-bottom: 1px solid #a2a2a2;
            height: 1.04rem;
            
            &>div{
                flex: 1;
                &>img{
                    margin:.1rem;
                height: .75rem;
                width: .73rem;
            }
            }
             &>div:nth-child(2){
                flex: 2;
                height: 100%;
                 &>div:first-child{
                     line-height: .46rem;
                 font-size: .16rem;
                 color: #333333;
             }
             &>p:last-child{
                   margin-top: .1rem;
             }
            }
             &>div:last-child{
                 height: 74%;
                 &>div:first-child{
                     margin-bottom: .18rem;
                     
                    
                 }
                 flex: .7;
             }
        }
     }
}
</style>
