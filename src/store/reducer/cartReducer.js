import {CART_ADD} from '../actionTypes/';


const defaultState = {
  cartList: [
    // {
    //   //商品的id
    //   id: 100,
    //   //单价
    //   price: 120,
    //   //s数量
    //   num: 99,
    //   //名称
    //   goods_name: "手机",
    //   //图片的路径
    //   img_url: "11",
    //   isChecked: false
    // },
    // {
    //   // 商品的id
    //   id: 10,
    //   // 单价
    //   price: 10,
    //   // 数量
    //   num: 19,
    //   // 名称
    //   goods_name: "手机a",
    //   // 图片的路径
    //   img_url: "122",
    //   isChecked: false
    // }
  ]
};


export default (state=defaultState,action)=>{
  //接收派发过来的action
  // console.log(action);
  //判断action的类型
  switch (action.type) {
    case CART_ADD:{
      //深拷贝
      let newState = JSON.parse(JSON.stringify(state));
      /* 
      1 获取到 商品信息对象
      2 判断购物车当中是否已经存在了
        已经在  只要拿旧的购物车中的商品信息对象 执行 num++即可
        还没有添加过  执行 编写一个合法 购物车数组规范的对象
          购物车数组.push()
       */
      //1获取商品信息对象
      let goodsObj = action.value;
      // 2 如何判断   拿 商品信息对象和 旧的购物车数组-循环判断 根据 id是否相对 来判断即可
      // index ===-1 =>不存在

      let index = newState.cartList.findIndex(v => v.id === goodsObj.id);
      if(index===-1){
        // 不存在
        let newGoods = {
          id: goodsObj.id,
          price: goodsObj.sell_price,
          num: 1,
          goods_name: goodsObj.title,
          img_url: goodsObj.img_url,
          isChecked: true
        };
        newState.cartList.push(newGoods);
      }else{
         // 获取旧的数据 执行 数量++
        newState.cartList[index].num++;
      }
      return newState;

    }
      default:
      break;
    }
    return state;
}