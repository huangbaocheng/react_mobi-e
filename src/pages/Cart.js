


import React, { Component, Fragment } from "react";
import { NavBar, Icon, List, SwipeAction,Checkbox} from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const CheckboxItem = Checkbox.CheckboxItem;


class Cart extends Component {
  
  render() {
    // console.log(this.props.carts);
    return (
      <Fragment>
        {/* 顶部导航栏开始 */}
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          // 点击图标 跳转会上一个页面
          onLeftClick={() => this.props.history.go(-1)}
        >
          商品详情
        </NavBar>
        {/* 顶部导航栏结束 */}

        {/* 购物车列表开始 */}
        <div className="cart_content">
          {this.props.carts.map(v => (
            <div className="cart_item" key={v.id}>
              <List>
                <SwipeAction
                  style={{ backgroundColor: "gray" }}
                  autoClose
                  right={[
                    {
                      text: "取消",
                      onPress: () => console.log("cancel"),
                      style: { backgroundColor: "#ddd", color: "white" }
                    },
                    {
                      text: "删除",
                      onPress: () => console.log("delete"),
                      style: { backgroundColor: "#F4333C", color: "white" }
                    }
                  ]}
                  onOpen={() => console.log("global open")}
                  onClose={() => console.log("global close")}
                >
                  <div className="cart_inner">
                    {/* 1复选框开始 */}
                    <div className="goods_chk_wrap">
                      <CheckboxItem>{v.isChecked}</CheckboxItem>
                    </div>
                    {/* 1复选框结束 */}

                    {/* 2商品图片开始 */}
                    <div className="goods_img_wrap">
                      <img src={v.img_url} alt="" />
                    </div>
                    {/* 2商品图片结束 */}
                    {/* 3商品名称开始*/}
                    <div className="goods_name_wrap">
                      <p>{v.goods_name}</p>
                      <p>{v.price}</p>
                    </div>
                    {/* 3商品名称结束 */}
                    {/* 4商品数量开始 */}
                    <div className="goods_num_wrap">
                      <span className="iconfont icon-minus" />
                      <span>{v.num}</span>
                      <span className="iconfont icon-plus" />
                    </div>
                    {/* 4商品数量结束 */}
                  </div>
                </SwipeAction>
              </List>
            </div>
          ))}
          <style jsx>
            {
              `
              




    .cart_content{
        .cart_item{
            .cart_inner{
                display: flex;
                align-items: center;
                justify-content: center;
                .goods_chk_wrap{
                    flex: 1
                }
                .goods_img_wrap{
                    flex: 3;
                 
                    
                }
                .goods_name_wrap{
                    flex: 2
                }
                .goods_num_wrap{
                    flex: 2
                }
            }
        }
    }
              `
            }

          </style>
        </div>
        {/* 购物车列表结束 */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  //种类的数量也等于购物车的长度
  return {
    carts: state.cartReducer.cartList 
  };
};


export default connect(mapStateToProps,null)(withRouter(Cart));