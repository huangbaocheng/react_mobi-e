
import React ,{Component , Fragment} from 'react';
import { NavBar, Icon } from "antd-mobile";
import { Carousel, WingBlank } from "antd-mobile";
import { getGoodsInfo } from "../APi";


class GoodsDetail extends Component {
    state={
        //轮播图数据
        imglist:[],
        //商品信息对象
        goodsinfo:{},
    }
    componentDidMount(){
        //1在路由对象上
        const {id}=this.props.match.params;
         
        getGoodsInfo(id)
            .then(res=>{
                if(res.status===0){
                    // console.log(res.message);
                    this.setState({ 
                        imglist:res.message.imglist,
                        goodsinfo:res.message.goodsinfo,
                    });
                }

            })
    }
   
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
            {/* 轮播图开始 */}
            <Carousel autoplay infinite>
              {this.state.imglist.map(val => (
                <a
                  key={val.id}
                  href="javascript:;"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={val.thumb_path}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            {/* 轮播图结束 */}
            {/* 商品信息开始 */}
            <div className="goods_info">
              <div className="goods_title">
                {this.state.goodsinfo.title}
              </div>
              <div className="goods_sub_title">
                {this.state.goodsinfo.sub_title}
              </div>
              <div className="goods_info_price">
                <span className="sell_price">
                  {this.state.goodsinfo.sell_price}
                </span>
                <span className="market_price">
                  {this.state.goodsinfo.market_price}
                </span>
              </div>
              <div className="goods_info_detail">
                <div className="goods_info_detailTitle">商品参数</div>
                <div className="goods_info_detailConent">
                  <div className="goodS_on">
                    商品编号:{this.state.goodsinfo.goods_no}
                  </div>
                  <div className="stock_quantity">
                    库存:{this.state.goodsinfo.stock_quantity}
                  </div>
                  <div className="add_time">
                    上架时间:{this.state.goodsinfo.add_time}
                  </div>
                </div>
              </div>
              <div className="goods_info_content" 
              dangerouslySetInnerHTML={{__html:this.state.goodsinfo.content}}>
                  
              </div>
              <style jsx>
                {`
                  .goods_info {
                      margin-bottom: 40px;
                    padding-top: 5px;
                    .goods_title {
                      font-weight: 600;
                    }
                    .goods_sub_title {
                      flex-wrap: 400;
                    }
                    .goods_info_price {
                      margin-bottom: 10px;
                      .sell_price {
                        text-decoration: line-through;
                      }
                      .market_price {
                        color: red;
                      }
                    }
                    .goods_info_detail {
                      .goods_info_detailTitle {
                        font-weight: 600;
                      }
                    }
                  }
                `}
              </style>
            </div>
            {/* 商品信息结束 */}
          </Fragment>
        );
    }
}
 
export default GoodsDetail;




