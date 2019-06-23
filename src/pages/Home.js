

import React, { Component, Fragment } from "react";
import { Carousel } from "antd-mobile";

import { getGoods } from "../APi";
class Home extends Component {
  state = {
    //轮播图
    sliderlist:[],
    //推荐商品
    toplist:[],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    getGoods().then(res=>{
      console.log(res);
      if(res.status===0){
        this.setState({
          sliderlist: res.message.sliderlist,
          toplist: res.message.toplist
        });
      }
    })
   
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
              .recom_goods_content{
                background: #fff;
                .recom_goods_item{
                  border-bottom: 1px solid #ccc;
                  display: flex;
                  .recom_goods_wrap{
                    flex: 1;
                    padding:0 20px;
                  }
                  .recom_goods_name{
                   flex: 6;
                   display: flex;
                   align-items: center;
                   overflow: hidden;
                   color: #000;
                   p{
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
      </Fragment>
    );
  }
}

export default Home;