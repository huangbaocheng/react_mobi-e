


import React, { Component, Fragment } from "react";
import { NavBar, Icon } from "antd-mobile";


class Cart extends Component {
  state = {};
  render() {
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
      </Fragment>
    );
  }
}

export default Cart;