

import React, { Component, Fragment } from "react";
import { Carousel } from "antd-mobile";

import { getGoods } from "../APi";
class Home extends Component {
  state = {
    sliderlist:[],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    getGoods().then(res=>{
      console.log(res);
      if(res.status===0){
        this.setState({
          sliderlist: res.message.sliderlist
        });
      }
    })
   
  }
  render() {  
    return (
      <Fragment>
        {/* 轮播图开始 */}
        <Carousel 
          autoplay 
          infinite
          >
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
      </Fragment>
    );
  }
}

export default Home;