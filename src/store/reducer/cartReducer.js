


const defaultState = {
  cartList: [
    {
      //商品的id
      id: 100,
      //单价
      price: 120,
      //s数量
      num: 99,
      //名称
      goods_name: "手机",
      //图片的路径
      img_url: "11",
      isChecked: false
    },
    {
      // 商品的id
      id: 10,
      // 单价
      price: 10,
      // 数量
      num: 19,
      // 名称
      goods_name: "手机a",
      // 图片的路径
      img_url: "122",
      isChecked: false
    }
  ]
};


export default (state=defaultState,action)=>{
    return state;
}