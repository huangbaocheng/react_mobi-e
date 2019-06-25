


import React, { Component, Fragment } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SwipeAction, List } from "antd-mobile";


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

        {/* 中间图文开始 */}
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
        
        >
          <List.Item
            extra="More"
            arrow="horizontal"
            onClick={e => console.log(e)}
          >
            Have left and right buttons
          </List.Item>
        </SwipeAction>
        {/* 中间图文结束 */}
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