<style lang="less" scoped>
swiper {
    width: 750rpx;
    height: 720rpx;
}

swiper image {
    width: 100%;
    height: 100%;
}

.product_info {
    padding-left: 10rpx;
}
.goodsPirce {
    color: #ff2d4a;
}
.goodsBody {
    display: flex;
    justify-content: space-between;
    margin: 10rpx 0;
}
.goodsName {
    font-size: 14px;
    // flex: 1;
    width: 500rpx;
    height: 70rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.goodsLike {
    width: 55px;
    border-left: 1px solid #ccc;
    // display: flex;
    // align-items: center;
    // justify-content: center;
}
.goodsLike .iconfont {
    width: 20px;
    height: 20px;
    margin-left: 38rpx;

    // color: red;
}
.goodsLike .like {
    // margin-top: 20px;
    font-size: 14px;
    margin-left: 24rpx;
}
.free {
    color: #999;
    font-size: 14px;
}
.part-item {
    font-size: 14px;
    margin-top: 20px;
    margin-top: 10rpx;
    height: 80rpx;
    background: #fff;
    display: flex;
    // flex-direction: column;
    align-items: center;
    .description {
        margin-left: 40rpx;
        color: #999;
    }
}
.pirce {
    color: red;
    margin-left: 40rpx;
}
// 收获地址
.part {
    margin-left: 10rpx;
    .address {
        color: #999;
        margin-left: 40rpx;
    }
    .iconfont {
        color: #999;
    }
}

//

.fixed-bar {
    width: 750rpx;
    height: 98rpx;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-group {
        display: flex;
    }
    .btn {
        width: 213rpx;
        height: 98rpx;
        line-height: 98rpx;
        text-align: center;
        font-size: 30rpx;
        color: #fff;
    }
    .yellow-btn {
        background-color: #ffb400;
    }
    .red-btn {
        background-color: #ff2d4a;
    }
    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .contact-btn {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .iconfont {
            width: 40rpx;
            height: 40rpx;
            font-size: 40rpx;
        }
        .note {
            margin-top: 10rpx;
            font-size: 22rpx;
            color: #666;
        }
    }
}
.iconfont .icon-shoucang {
    font-size: 50px;
    color: "#ff2d4a" !important;
}

.iconfont .icon-shoucang-fill {
    font-size: 50px;
    color: "#ff2d4a" !important;
}

// 图文介绍，规格参数
.tabs {
    &-head {
        height: 100rpx;
        background-color: #fff;
        display: flex;
        .active {
            color: #ff2d4a;
            font-size: 400;
            &:after {
                content: "";
                height: 8rpx;
                width: 100%;
                background-color: #ff2d4a;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }
    &-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30rpx;
        position: relative;
        margin-bottom: 10rpx;
    }
    &-body {
        background-color: #fff;
        padding: 16rpx;
        margin-bottom: 100rpx;
    }
}
.parmes-item {
    font-size: 28rpx;
    display: flex;
    height: 100rpx;
    line-height: 100rpx;
    border-top: 1px solid rgba(92, 92, 92, 0.3);
    border-right: 1px solid rgba(92, 92, 92, 0.3);
    border-left: 1px solid rgba(92, 92, 92, 0.3);
    // border-bottom: 1px solid rgba(92, 92, 92, 0.3);
    .attr_name {
        padding-left: 30rpx;
        width: 300rpx;
        border-right: 1px solid rgba(92, 92, 92, 0.3);
    }
    .attr_vals {
        width: 400rpx;
        padding-left: 30rpx;
    }
    .last-parmes {
        border-bottom: 1px solid rgba(92, 92, 92, 0.3);
    }
}
</style>
<template>

    <div>
        <!-- 1.轮播图 -->
        <swiper indicator-dots autoplay circular :interval="3000" :duration="1000">
            <block v-for="(item,index) in goodsIdList.pics" :key="index">
                <!-- <navigator :url="item.navigator_url"> -->
                <!-- <a :href="item.navigator_url"> -->
                <swiper-item>
                    <image :src="item.pics_big" class="slide-image" />
                </swiper-item>
                <!-- </navigator> -->
                <!-- </a> -->
            </block>
        </swiper>

        <!-- 2.产品信息 -->
        <view class="product_info">
            <view class="goodsPirce">
                <text>¥ {{goodsIdList.goods_price}}</text>
            </view>
            <view class="goodsBody">
                <view class="goodsName">
                    <text>{{goodsIdList.goods_name}}</text>
                </view>
                <view class="goodsLike">
                    <!-- 星星 收藏 -->
                    <view class="iconfont icon-shoucang"></view>
                    <view class="like">
                        <text>收藏</text>
                    </view>
                </view>
            </view>
            <view class="background:#fff">
                <text class="free">快递: 免运费</text>
            </view>
            <view class="part-item">
                促销
                <text class="pirce"> 满300减30元</text>
            </view>
            <view class="part-item">
                <text class="note">已选
                </text>
                <text class="description">黑色/S/1件
                </text>
            </view>
        </view>

        <!-- 收货地址 -->
        <view class="part">
            <view class="part-item">
                <text class="note">送至</text>
                <view @click="chooseAddress" class="address">
                    <view v-if="!addressInfo">
                        <text>请选择收获地址</text>
                    </view>
                    <view v-else>
                        <text>{{addressInfo.provinceName}} {{addressInfo.cityName}} {{addressInfo.countyName}}</text>
                    </view>
                </view>
                <view class="iconfont icon-jiantouyou"></view>
            </view>
        </view>

        <!-- 图文介绍跟规格参数 -->
        <view class="tabs">
            <view class="tabs-head">
                <block v-for="(item,index) in tab" :key="index">
                    <view @click="tabSwith(index)" :class="['tabs-item',selectedTabIndex===index ? 'active' : '']">{{item}}</view>
                </block>
            </view>

            <view class="tabs-body">
                <view v-show="selectedTabIndex===0">
                    <view v-html="goodsIdList.goods_introduce"></view>
                </view>
                <view v-show="selectedTabIndex===1">
                    <view v-for="(item,index) in goodsIdList.attrs" :key="item.attr_id" class="parmes-item">
                        <text :class="['attr_name',index===goodsIdList.attrs.length-1?'.last-parmes':'']">{{item.attr_name}}</text>
                        <text :class="['attr_vals',index===goodsIdList.attrs.length-1?'.last-parmes':'']">{{item.attr_value}}</text>
                    </view>
                </view>
            </view>

        </view>

        <!-- 底部菜单条 -->
        <view class="fixed-bar">

            <view class="item">
                <button class="contact-btn" open-type="contact"></button>
                <view class="iconfont icon-kefu"></view>
                <text class="note">联系客服</text>
            </view>
            <view @click="goToShopCart" class="item">
                <view class="iconfont icon-gouwuche"></view>
                <text class="note">购物车</text>
            </view>
            <view class="btn-group">
                <view @click="addToShopCart" class="btn yellow-btn">加入购物车</view>
                <view class="btn red-btn">立即购买</view>
            </view>
        </view>
    </div>

</template>
<script>
import {addGoods} from "../../utils/storageTool";
export default {
    // 既可以调用微信小程序的方法也可以调用vue的生命周期钩子
    //模型
    data() {
        return {
            goodsId: 0, //放产品id
            addressInfo: null, //用户选择收货地址
            goodsIdList: {}, //产品详情列表
            tab: ["图文价绍", "规格产品"],
            selectedTabIndex: 0,
            goods_id: -1 //产品id
        };
    },

    onLoad(options) {
        this.goods_id = options.goods_id;
        // console.log(options);
        this.getDoodsId(options.goods_id);
        // this.addToShopCart(options.goods_id)
        // this.goodsId = options.goods_id
        // console.log(this.goodsId); //string 129
    },
    // 处理函数的方法
    methods: {
        // 获取商品详情列表
        getDoodsId(goodsI_id) {
            this.$axios
                .get(`api/public/v1/goods/detail?goods_id=${goodsI_id}`)
                .then(res => {
                    this.goodsIdList = res.data.message;
                    console.log(res.data.message);
                });
        },

        // 图文介绍
        tabSwith(index) {
            this.selectedTabIndex = index;
        },

        // 获取收获地址
        chooseAddress() {
            wx.chooseAddress({
                success: res => {
                    res.detailAddress = `${res.provinceName}${res.cityName}${
                        res.countyName
                    }${res.detailInfo}`;
                    // 赋值给addressInfo
                    this.addressInfo = res;

                    // 存储到本地
                    wx.setStorageSync("address", res);
                },
                fail: err => {
                    if (err.errMsg == "chooseAddress:fail auth deny") {
                        wx.showModal({
                            title: "提示",
                            content: "请去 我的 设置 收获地址 > 打开授权",
                            success(res) {
                                if (res.confirm) {
                                    // 确认
                                    wx.switchTab({ url: "/pages/mine/main" });
                                }
                            }
                        });
                    }
                }
            });
        },
        goToShopCart() {
            wx.switchTab({
                url: "/pages/shopCart/main"
            });
        },

        addToShopCart() {
            // console.log(goodsI_id);
            // 传过去id 并且跳过去
            wx.showToast({
                title: "添加成功",
                image: "/static/img/duigou.png",
                mask: "true"
            });

            // 保存到本地
            // addGoods({
            //     // id跟数量
            //     goods_id: this.goods_id,
            //     googs_number: 1
            // });

            addGoods({
                goods_id: this.goods_id,
                goods_number: 1
            });
        }

        // // 发送请求 async 异步 配合await 使用
        // async getDoodsId(){
        //     const res = await this.$axios.get(`api/public/v1/goods/detail?goods_id=${this.goodsId}`)
        //     console.log(res);

        //     this.goodsIdList = res.data.message
        //     console.log(res.data.message);

        // }
    }
};
</script>

