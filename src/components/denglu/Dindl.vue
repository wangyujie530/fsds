<template>
     <div class="forms">
      <div>
          <input type="text" placeholder="手机/邮箱/用户名" v-model="phone">
      </div>
      <div>
         <van-field
        center
        clearable
        placeholder="请输入短信验证码"

        v-model="sendcode"
        >
        <template #button>
            
            <van-button size="small" type="primary" @click="yzma">发送验证码</van-button>
        </template>
        </van-field>
      </div>
    <div>
        <p>温提示:未注册蜂鸟外卖帐号的手机号,登录时将自动注册,且代表已同意<span>《用户服务协议》</span>
</p>
    </div>
      <van-button type="primary" size="large" @click="sjdel">登录</van-button>
      <div>
          <p>关于我们</p>
      </div>
      
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
          sms:'',
          sendcode:'',
              phone:'18338942697'
        };
    },
    
    methods: {
       yzma(){
            this.axios.get('/api/sendcode?phone='+this.phone).then(res=>{
                console.log(res.data.code)
              this.sendcode=res.data.code
            })
       },
       sjdel(){
        this.axios.post('/api/login_sms',{
           
            phone:this.phone,
             code:this.sendcode,
            }).then(res=>{
                console.log(res)
                if(res.data.data.phone==this.phone){
                   this.$notify({
                       message: '登陆成功',
                     color: '#ffffff',
                    type: 'success',
                        onClose:()=>{
                            sessionStorage.setItem('phone',res.data.data.phone)
                            this.$store.state.isfla=true
        this.$store.state.isflas=false
                            this.$router.push('/Wode')
                        }
                   });
                }
               
            })

       }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.forms{
    font-size: .15rem;
    padding: 0 .38rem;
    input{
        margin: .08rem 0 ;
        width: 100%;
         height: .46rem;
    border: .01rem solid #dddddd;
     border-radius: .03rem;
     padding-left: .1rem;
    }
    .van-button{
        border-radius: .03rem;
 margin: .2rem 0 ;
    }
    p{
        text-align: center;
        span{
            color: rgb(21, 255, 0);
        }
    }
}
</style>
