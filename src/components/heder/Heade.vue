<template>
    <div class="headerd">
        <slot name="nave_s"></slot>
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
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.headerd{
    background-color: #02a774;
    height: .45rem;
    line-height: .45rem;
    font-size: .18rem;
    text-align: center;
    position: relative;
   
       
    .van-nav-bar .van-icon{
         color:  #ffffff  ;
    }
   
    &>img{
         width: .22rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .i_right{
       
        right: .12rem;
    }
    .i_left{
        right: .51rem;
    }

}
</style>
