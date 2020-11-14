<template>
     <ul class="hom_uls">
        <li><router-link to="/about">
       <van-icon name="hot-sale-o"  />
        <!-- <img src="./../../views/footer/ic_tab_home_normal.png" alt="" class="normal">
        <img src="./../../views/footer/ic_tab_home_active.png" alt="" class="active"> -->
        <span>外卖</span>
        </router-link></li>
        <li><router-link to="/Sousuo">
        <van-icon name="search" />
        <span>搜索</span>
         <!-- <img src="./../../views/footer/ic_tab_status_normal.png" alt="" class="normal">
         <img src="./../../views/footer/ic_tab_status_active.png" alt="" class="active"><span>广播</span> -->
        </router-link></li>
        <li><router-link to="/Dinan">
        <van-icon name="orders-o" />
        <span>订单</span>
         <!-- <img src="./../../views/footer/ic_tab_group_normal.png" alt="" class="normal"> 
         <img src="./../../views/footer/ic_tab_group_active.png" alt="" class="active" ><span>小组</span> -->
        </router-link></li>
        <li><router-link to="/Wode">
        <van-icon name="manager" />
<span>我的</span>
         <!-- <img src="./../../views/footer/ic_tab_profile_normal.png" alt="" class="normal">
         <img src="./../../views/footer/ic_tab_profile_active.png" alt=""  class="active"> -->
        </router-link></li>
     </ul>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.van-icon{
    margin-top: .1rem;
    font-size: .2rem;
}
.hom_uls{
    background-color: white;
    font-size: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    height: .49rem;
    border-top: 1px solid #cccccc;
    li{
        flex: 1;
          a{
              display: flex;
            flex-direction: column;
            align-items: center;
              height: 100%;
            font-size: .12rem;
           img{
           width:  .28rem;
           }
        //    切换样式
           .active{
               display: none;
           }
           .normal{
               display: block;
           }
           &.router-link-active{
               color: #02a774;
               .active{
               display: block;
           }
           .normal{
               display:  none;
           }
           }
        }  
    }
    
}
</style>