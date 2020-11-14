<template>
    <div>
         <Herder>
             <van-nav-bar slot="nave_s" class="headerd" fixed>
            <template #title >
               <span style="color:#ffffff;">我的</span>
            </template>
             </van-nav-bar>
        </Herder>
        <div class="hei">
            <div class="ssone">
                <van-icon name="user-circle-o" />
                
            </div>
            <div class="ssone2">
                <span @click="denls" v-show="isflas">登陆/注册</span>
                <p v-show="isfla"><van-icon name="hot-sale" />{{phone}}</p>
                <p v-show="isflas"><van-icon name="hot-sale" />暂无绑定手机号</p>
            </div>
            <div class="ssone3">
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="box">
            <div>
                <div class="one"><span>0.00</span>
                    元</div>
                <span>我的余额</span>
            </div>
             <div class="one_f">
                <div class="one_1"><span>0</span>个</div>
                <span>我的优惠</span>
            </div>
             <div>
                <div class="one_2"><span>0</span>分</div>
                <span>我的积分</span>
            </div>
        </div>
        <ul class="ul_Sv">
            <li class="fons">
                <div><van-icon name="orders-o" color='#55c4a2' /></div>
                <div class="dis_sv"><span>我的订单</span><van-icon name="arrow" /></div>
            </li>
            <li class="fons">
                <div><van-icon name="gem-o" color='#ff5f3e'/></div>
                <div class="dis_sv"><span>积分商城</span><van-icon name="arrow" /></div>
            </li>
            <li class="fons">
                <div><van-icon name="medal" color='#ff9b04'/></div>
                <div class="dis_sv"><span>蜂鸟外卖会员卡</span><van-icon name="arrow" /></div>
            </li>
        </ul>
        <ul class="ul_Sv">
             <li class="fons">
                <div><van-icon name="hotel-o" color='#02a774' /></div>
                <div class="dis_sv"><span>服务中心</span><van-icon name="arrow" /></div>
            </li>
        </ul>
        <div style="fontSize:0;" v-show="isfla">
            <van-button type="danger" size="large" @click="dtuic" >退出登录</van-button>
            
      </div>
    </div>
</template>

<script>
import Herder from './../components/heder/Heade'
export default {
    props: {

    },
    data() {
        return {
            phone:'',
            isfla:this.$store.state.isfla,
            isflas:this.$store.state.isflas
        };
    },
    mounted(){
        this.phone=sessionStorage.getItem('phone')
    },

    methods: {
        
        denls(){
            this.$router.push('/Denglu')
        },
        dtuic(){
            this.$dialog.alert({
      message: '确定退出？',
       theme: 'round-button',
       
    }).then(()=>{
        console.log('ss')
        this.$notify({
                       message: '退出成功',
                     color: '#fff',
                    type: 'danger',
                        onClose:()=>{
                            this.$store.state.isfla=false
                            this.$store.state.isflas=true
                            this.$router.push('/about')
                        }
                   });
        //  this.$store.state.isfla=false
        // this.$store.state.isflas=true
        // sessionStorage.removeItem('phoen')
        // this.$router.push('/Wode')
       
    });
        }
    },
    components: {
        Herder,
    },
    
};
</script>

<style scoped lang="less">
.headerd{
    border-bottom:1px solid white;
}
.hei{
    font-size: 0;
    background-color: #02a774;
    height: 1rem;
    display: flex;
    color: white;
    &>div{
        flex: 1;
    }
    .ssone{
        flex: .5;
        font-size: .6rem;
        text-align: center;
        line-height: 1.1rem;
    }
    .ssone2{
        flex: 2;
        &>span{
            font-size: .2rem;
        }
        &>p{
                font-size: .14rem;
        }
        line-height: 1rem;
    }
    .ssone3{
        flex: .2;
        font-size: .14rem;
        line-height: 1rem;
    }
}
.box{
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    line-height: .4rem;
   
    &>div{
        &>div>span{
            font-size: .24rem;
             font-weight: 900;
        }
        .one_1>span{
            
            color: #ff5f3e;
           
        }
        
         .one>span{
            font-size: .24rem;
            color: #ff9900;
        }
         .one_2>span{
            font-size: .24rem;
            color: #6ac20b;
        }
        flex: 1;
        font-size: .14rem;
        text-align: center;
       
    }
    .one_f{
            border-left: 1px solid #f1f1f1;
            border-right: 1px solid #f1f1f1;
        }
    height: .8rem;
}
.ul_Sv{
     margin-top: .1rem ;
    border-top: 1px solid #f1f1f1;
}
.fons{
    font-size: .16rem;
    display: flex;
   
    &>div{
         height: .51rem;
        flex: 5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .dis_sv{
        border-bottom: 1px solid #f1f1f1;
    }
    .van-icon{
            padding: 0 .1rem;
        }
    &>div:first-child{
        flex: .5;
    }

}
</style>
