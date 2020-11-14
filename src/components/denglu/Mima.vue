<template>
    <div class="forms">
      <div>
          <input type="text" placeholder="手机/邮箱/用户名" v-model="username">
      </div>
      <div class="div_s">
        <van-field
        center
        clearable
        placeholder="请输入密码"
        :type="checked?'password':'text'"
         v-model="password"
        >
        <template #button>
            <van-switch v-model="checked" size="18px"/>
        </template>
        </van-field>
      </div>
      <div class="civ_s2">
        <van-field
        center
        clearable
        placeholder="输入验证码"
        type="text"
        v-model="captcha"
        >
        <template #button>
            <span v-html="img" @click="qiehuan"></span>
        </template>
        </van-field>
        
         
      </div>
      <van-button type="primary" size="large" @click="denlus">登录</van-button>
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
      // pwd:"password",
      captcha:"",
      username: 'amdin',
      password: '123456',
      checked: true,
      img:''
    };
  },
  mounted(){
     this.axios.get('/api/captcha').then(res=>{
                this.img=res.data
            })
  },
  methods: {
   
     denlus(){
       this.axios.post('/api/login_pwd',{
         name:this.username,
	pwd:this.password,
	captcha:this.captcha 
       }).then(res=>{
         if(res.data.code===0){
          this.$notify({
                       message: '登陆成功',
                     color: '#ffffff',
                    type: 'success',
                        onClose:()=>{
                        
                            this.$store.state.isfla=true
        this.$store.state.isflas=false
                            this.$router.push('/Wode')
                        }
                   });
         }
               console.log(res)
            })

     },
    onSubmit(values) {
      console.log('submit', values);
    },
    qiehuan(){
 this.axios.get('/api/captcha').then(res=>{
                this.img=res.data
            })
    }
  },
    components: {
      
    },
};
</script>

<style scoped lang="less">
.forms{
    padding: 0 .38rem;
    input{
        margin: .08rem 0 ;
        width: 100%;
         height: .46rem;
    border: .01rem solid #dddddd;
     border-radius: .03rem;
     padding-left: .1rem;
    }
    .div_s,.civ_s2{
       margin: .08rem 0 ;
      .van-cell{
        padding: 0;
         padding-left: .1rem;
          height: .7rem;
      }
     .van-field__value{
        
         height: .7rem;
     }
       width: 100%;
         height: .7rem;
       
    }
    .van-button{
        border-radius: .03rem;
 margin: .2rem 0 ;
    }
    p{
        text-align: center;
    }
}
</style>
