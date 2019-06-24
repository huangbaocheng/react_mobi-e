import React, { Component, Fragment } from "react";
import { Carousel } from "antd-mobile";
//  可以让我们的Home组件获取到路由信息对象 history 和match
import { withRouter } from "react-router-dom";
import { getGoods, getGoodsGroup } from "../APi";
class Home extends Component {
  state = {
    //轮播图
    sliderlist: [],
    //推荐商品
    toplist: [],
    //商品列表
    GoodsGroupList: [],
    imgHeight: 176
  };
  componentDidMount() {
    getGoods().then(res => {
      if (res.status === 0) {
        this.setState({
          sliderlist: res.message.sliderlist,
          toplist: res.message.toplist
        });
      }
    });
    //商品列表
    getGoodsGroup().then(res => {
      if (res.status === 0) {
        this.setState({ GoodsGroupList: res.message });
      }
    });
  }
  render() {
    return (
      <Fragment>
        {/* 轮播图开始 */}
        <Carousel autoplay infinite>
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="javascript:;"
              // href="http://www.alipay.com"
              onClick={() =>
                this.props.history.push("/GoodsDetail/" + val.id)
              }
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 轮播图结束 */}

        {/* 推荐商品开始 */}
        <div className="recom_goods">
          <div className="recom_goods_title">推荐商品</div>
          <div className="recom_goods_content">
            {this.state.toplist.map(v => (
              <a
                key={v.id}
                href="javascrtpt:;"
                onClick={() =>
                  this.props.history.push("/GoodsDetail/" + v.id)
                }
                className="recom_goods_item"
              >
                <div className="recom_goods_wrap">
                  <img src={v.img_url} alt="/" />
                </div>
                <div className="recom_goods_name">
                  <p>{v.title}</p>
                </div>
              </a>
            ))}
          </div>
          <style jsx>
            {`
              .recom_goods_title {
                padding: 10px;
                background: #f5f5f9;
                color: #888;
              }
              .recom_goods_content {
                background: #fff;
                .recom_goods_item {
                  border-bottom: 1px solid #ccc;
                  display: flex;
                  .recom_goods_wrap {
                    flex: 1;
                    padding: 0 20px;
                  }
                  .recom_goods_name {
                    flex: 6;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    color: #000;
                    p {
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    }
                  }
                }
              }
            `}
          </style>
        </div>
        {/* 推荐商品结束 */}

        {/* 商品详情开始 */}
        <div className="good_group">
          {this.state.GoodsGroupList.map(v1 => (
            <div key={v1.level1cateid} className="good_group_item">
              <div className="good_group_item_title">{v1.catetitle}</div>
              <div className="good_group_item_content">
                {v1.datas.map(v2 => (
                  <a
                    href="javascript:;"
                    onClick={() =>
                      this.props.history.push("/GoodsDetail/" + v2.artID)
                    }
                    key={v2.artID}
                    className="goods_item"
                  >
                    <img src={v2.img_url} alt="/" />
                    <div className="artTitle">{v2.artTitle}</div>
                    <div className="goods_price">
                      <div className="sell_price">{v2.sell_price}</div>
                      <div className="market_price">{v2.market_price}</div>
                    </div>
                    <div className="goods_num">
                      热卖中
                      <span className="stock_quantity">
                        {v2.stock_quantity}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
          <style jsx>
            {`
              .good_group {
                .good_group_item_title {
                  padding: 10px;
                }
                .good_group_item_content {
                  background: #fff;
                  display: flex;
                  flex-wrap: wrap;
                  .goods_item {
                    width: 50%;
                    padding: 15px;
                    border-bottom: 1px solid #333;
                    &:nth-child(odd) {
                      border-right: 1px solid #333;
                    }
                    img {
                    }
                    .artTitle {
                      display: -webkit-box;
                      overflow: hidden;
                      white-space: normal !important;
                      text-overflow: ellipsis;
                      word-wrap: break-word;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                    .goods_price {
                      display: flex;
                      justify-content: space-between;
                      .sell_price {
                        color: red;
                        font-size: 16px;
                      }
                      .market_price {
                        color: #666;
                        text-decoration: line-through;
                        font-size: 14;
                      }
                    }
                    .goods_num {
                      .stock_quantity {
                        color: red;
                      }
                    }
                  }
                }
              }
            `}
          </style>
        </div>
        {/* 商品列表结束 */}
      </Fragment>
    );
  }
}

export default withRouter(Home);
