<template>
    <div class="sj">
        <div class="peisong">
            <p>配送信息</p>
            <p>
                <span>蜂鸟专送</span>
                <span>由商家配送提供配送 约28分钟送达 距离1000m</span>
            </p>
            <p>配送费 ￥4</p>
        </div>
        <div class="bj_line"></div>
        <div class="serve">
            <p>活动和服务</p>
            <ul> 
                <li v-for="(item) in info_list.supports" :key="item.id">
                    <span>{{item.name}}  </span>
                    <span>  {{item.content}}</span>
                </li>
            </ul>
        </div>
        <div class="bj_line"></div>
        <div class="shijing">
            <p>商家实景</p>
            <div>
                <img :src="item" v-for="(item,index) in info_list.pics" :key="index">
            </div>
            
        </div>
        <div class="bj_line"></div>
        <div class="shop_info">
            <p>商家信息</p>
            <ul>
                <li>
                    <span>品类</span>
                    <span>{{info_list.category}}</span>
                </li>
                <li>
                    <span>商家电话</span>
                    <span>{{info_list.phone}}</span>
                </li>
                <li>
                    <span>地址</span>
                    <span>{{info_list.address}}</span>
                </li>
                <li>
                    <span>营业时间</span>
                    <span>{{info_list.workTime}}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            info_list:this.$store.state.list.info
        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.sj{
    font-size: .12rem;
    color: #666666;
    position: absolute;
    z-index: 6; 
    background-color: white;
    .bj_line{
        height: .16rem;
        background-color: #F3F5F7;
    }
    &>div{
        padding: 0 .14rem;
        overflow: hidden;
    }
    &>div>p:nth-child(1){
        font-size: .16rem;
        color: #333;
        margin: .16rem 0;
    }
    .peisong{
        border-bottom: #DBDEE1 solid 1px;
        border-top: #DBDEE1 solid 1px;
        p{
            span:nth-child(1){
                display: inline-block;
                width: .56rem;
                height: .2rem;
                line-height: .2rem;
                color: white;
                text-align: center;
                background-color: #0097FF; 
            }
        }
        p:nth-child(3){
            line-height: .3rem;
        }
    }
    .serve{
        border-bottom: #DBDEE1 solid 1px;
        border-top: #DBDEE1 solid 1px;
        ul{
            li{
                height: .3rem;
                line-height: .3rem;
                span:nth-child(1){
                    color: white;
                    display: inline-block;
                    width: .36rem;
                    height: .2rem;
                    background-color: red;
                    line-height: .2rem;
                    text-align: center;
                }
            }
        }
    }
    .shijing{
        div{
            display: flex;
            justify-content: space-between;
            img{
                width: 1.2rem;
                height: .9rem;
                margin-right: .1rem;
                margin-bottom: .2rem;
            }
        }
        
    }
    .shop_info{
        ul{
            margin-bottom: .4rem;
            li{
                height: .46rem;
                line-height: .46rem;
                border-bottom:  #DBDEE1 solid 1px;
                display: flex;
                justify-content: space-between;
                span:nth-child(1){
                    color: #333;
                }
            }
        }
    }
}
</style>
