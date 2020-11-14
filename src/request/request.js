import axios from './index';
export function cate(){
    return axios({
        url:'/index_category',
        method:'get'
    })
}
export function shops(){
    return axios({
        url:'/shops',
        method:'get'
    })
}
export function position(){
    return axios({
        url:'/position/40,116',
        method:'get'
    })
}
export function search(k){
    return axios({
        url:'/search_shops',
        params:{
            keyword:k,
            geohash:'40,116'
        }
    })
}
export function svg(){
    return axios({
        url:'/captcha',
        method:'get'
    })
}