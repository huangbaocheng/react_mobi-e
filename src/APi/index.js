import axios from "axios";

//统一请求的前缀
axios.defaults.baseURL = "http://react.zbztb.cn/site/";

//axios拦截器 发送前调用一个事件 拦截器
//发送回来 调用一个 事件 拦截器
//添加请求拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    //返回什么数据 其他用了 axios 请求的返回值 就是什么数据
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

//1获取轮播图数据
 export const getGoods=()=>axios.get("goods/gettopdata/goods");
 //2h获取商品列表页数据
 export const getGoodsGroup = () => axios.get("goods/getgoodsgroup");
 //3 获取商品详情
 export const getGoodsInfo = (id) => axios.get("goods/getgoodsinfo/"+id);

 