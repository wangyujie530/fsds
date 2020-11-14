import axios from 'axios';
export default function(config){
    //instance就是实例化的axios对象
    const instance =axios.create({
        baseURL:'/api',

    });
    //拦截请求
    instance.interceptors.request.use(function(config){
        //config.headers[]
        console.log(config);
        return config;
    },function(error){
        return Promise.reject(error);
    });


    //拦截响应
    instance.interceptors.response.use(function(response){
        return response.data;
    },function(error){
        return Promise.reject(error);
    })
    return instance(config);
}