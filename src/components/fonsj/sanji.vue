<template>
    <div class="uls_S">
        <div class="uls_Ss">
            <router-link to="/szctest1/shanpi/sanji1">优惠</router-link>
        <router-link to="/szctest1/shanpi/sanji2">折扣</router-link>
        <router-link to="/szctest1/shanpi/sanji3">香浓甜粥</router-link>
        <router-link to="/szctest1/shanpi/sanji4">营养咸粥</router-link>
        <router-link to="/szctest1/shanpi/sanji5">爽口凉菜</router-link>
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
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.uls_S{
    display: flex;
    .uls_Ss{
        display: flex;
        flex-direction: column;
        background-color: #f3f5f7;
       
        a{
        &.router-link-active{
            color: #02a774;
              background-color:white;
        }
        line-height: .5rem;
        
        height: .5rem;
        width: 1rem;
        font-size: .16rem;
        text-align: center;
    }
    }
    
}
</style>
