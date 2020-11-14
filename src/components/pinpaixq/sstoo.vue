<template>
    <div>
        <div class="uls_S">
            <router-link to="/szctest1/shanpi">点餐</router-link>
        <router-link to="/szctest1/xianqing">评价</router-link>
        <router-link to="/szctest1/shanjia">商家</router-link>
        </div>
        
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
    mounted(){
        this.$router.push('/szctest1/shanpi')
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
    
    a{
        &.router-link-active{
            color: #02a774;
            border-bottom: 1px solid #02a774;
            
        }
        padding: .1rem;
        flex: 1;
        font-size: .16rem;
        text-align: center;
    }
}
</style>
