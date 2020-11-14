<template>
    <div>
        <div>
            <Sanji></Sanji>
        </div>
    </div>
</template>

<script>
import Sanji from './../fonsj/sanji'
export default {
    props: {

    },
    data() {
        return {
            lists:this.$store.state.list.goods,
             number:0,
                num:2,
                price:7,
                desc:"描述信息",
                title:"商品标题",
                thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
             active: 0,
            items:this.$store.state.list.goods.name,
      list:[
          {
              number:0,
                num:2,
                price:1,
                desc:"描述信息",
                title:"商品标题",
                thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
          },
          {
              number:0,
                num:2,
                price:1,
                desc:"描述信息",
                title:"商品标题",
                thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
          },{
              number:1,
                num:1,
                price:1,
                desc:"描述信息",
                title:"商品标题",
                thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
          }
          ]
        };
    },
    mounted(){
        console.log(this.$store.state.list.goods)
    },
    methods: {
        jiajia(v){
            if(v==v){
                this.list[v].num=++this.list[v].num
            console.log((this.list[v].num*this.list[v].price)+0) 
            // console.log(this.$store.state.list)
            }
           
        },
        jianjian(v){
            if(v==v){
                this.list[v].num=--this.list[v].num
                
            console.log((this.list[v].num*this.list[v].price)+0)
            }
           
        }
    },
    components: {
        Sanji,
    },
};
</script>

<style scoped lang="less">

</style>
