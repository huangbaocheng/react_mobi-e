
import React ,{Component , Fragment} from 'react';
import { NavBar, Icon } from "antd-mobile";
import { Carousel, WingBlank } from "antd-mobile";
import { getGoodsInfo } from "../APi";


class GoodsDetail extends Component {
    state={
        //轮播图数据
        imglist:[],
    }
    componentDidMount(){
        //1在路由对象上
        const {id}=this.props.match.params;
         
        getGoodsInfo(id)
            .then(res=>{
                if(res.status===0){
                    // console.log(res.message);
                    this.setState({ imglist:res.message.imglist });
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
            <Carousel
              autoplay
              infinite
            >
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
          </Fragment>
        );
    }
}
 
export default GoodsDetail;




