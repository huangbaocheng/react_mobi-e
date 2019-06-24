import { CART_ADD } from "../actionTypes";


//action的生成器
//1负责新增购物车 和 派发行为

export const cart_add=(goodsObj)=>{
    return {
      type: CART_ADD,
      /**
       * 传入整个商品信息对象就可以了
       */
      value: goodsObj
    };
}