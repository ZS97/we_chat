<template>
    <div>
        <!-- 轮播图 -->
        <swiper indicator-dots autoplay circular :interval="3000" :duration="1000">
            <block v-for="(item,index) in swiperData" :key="index">
                <navigator :url="item.navigator_url">
                    <!-- <a :href="item.navigator_url"> -->
                    <swiper-item>
                        <image :src="item.image_src" class="slide-image" width="355" height="150" />
                    </swiper-item>
                </navigator>
                <!-- </a> -->
            </block>
        </swiper>

        <!-- 列表 -->
        <view class="catitemList">
            <view v-for="(item,index) in catitems" :key="index" class="category-item">
                <image :src="item.image_src" />
                <!-- <text>{{item.name}}</text> -->
            </view>

        </view>

        <!-- 楼层数据列表 -->
        <view id="fl">
            <!-- 遍历三项 -->
            <view v-for="(item,index) in floorData" :key="index">
                <!-- 楼层头部 -->
                <view class="floor-header">
                    <image :src="item.floor_title.image_src" />
                </view>
                <!-- 楼层body -->
                <view class="floor-body">
                    <!-- 楼层左边 -->
                    <view class="floor-body-left">
                        <image :src="item.product_list[0].image_src" />
                    </view>
                    <!-- 楼层右边 -->
                    <view class="floor-body-right">
                        <view v-if="subIndex>0" v-for="(subItem,subIndex) in item.product_list" :key="subIndex">
                            <image :src="subItem.image_src" :style="{width:subItem.image_width+'rpx'}" />
                        </view>
                    </view>
                </view>

            </view>

        </view>

        <!-- 楼层底部 -->
        <view class="footer">
            <view class="iconfont icon-xiao"></view>
            <text class="bottom">我是页面底部</text>
        </view>

        <!-- 返回底部 -->
        <view class="goTop" @click="goBack" v-show="isShowScroll">
            <view class="img"><img src="../../../static/img/arrow_top@2x.png" alt=""></view>
            <view class="back">TOP</view>
        </view>

    </div>
</template>


<style lang="less" scoped>
// @import "../../../static/styles/iconfont.less";
// 支持less sass写法
swiper {
    height: 450rpx;
    image {
        width: 100%;
        height: 100%;
    }
}

.catitemList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    height: 120rpx;
    .category-item {
        // display: inline-block;
        width: 100rpx;
        height: 100rpx;
        image {
            width: 100%;
            height: 100%;
        }
    }
}

// 楼层
.fl {
    margin-top: 20rpx;
    background-color: white;
}
#fl .floor-header {
    width: 750rpx;
    height: 59rpx;
    margin-bottom: 20rpx;
}
#fl .floor-header image {
    margin: 10rpx 0rpx 0rpx 10rpx;
    width: 100%;
    height: 100%;
}
.floor-body {
    display: flex;
    &-left {
        width: 232rpx;
        height: 386rpx;

        image {
            width: 100%;
            height: 100%;
        }
    }
    &-right {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        image {
            height: 188rpx;
            margin-left: 10rpx;
        }
    }
}

// 底部
.footer {
    display: flex;
    justify-content: center;
    height: 50rpx;
    .bottom {
        font-size: 24rpx;
        // margin: 20rpx 0rpx;
        color: #999;
    }
}

// 返回顶部
.goTop {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    bottom: 100rpx;
    // position: relative;
    right: 100rpx;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    position: fixed;
    .img {
        width: 24rpx;
        height: 24rpx;
        margin-left: 26rpx;
        margin-bottom: 20rpx;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .back {
        font-size: 24rpx;
    }
}
</style>


<script>
export default {
    data() {
        return {
            swiperData: [], //获取轮播图
            catitems: [], //列表展示
            floorData: [], //下面楼层信息
            isShowScroll: false //回到顶部显示
        };
    },
    // created(){

    // }
    onLoad() {
        this.getSwiperData(), this.getCatItems(), this.getFloorData();
    },
    onPageScroll(e) {
        // console.log(e);
  
        // 如果大于100 此时是隐藏的就改为显示，如果小于100是显示的就改为隐藏；
        let hide = e.scrollTop > 100? true:false;
        if(hide != this.isShowScroll){
            this.isShowScroll = hide;
        }
        
        // if (e.scrollTop > 100) {
        //     // console.log('111');
            
        // } else {
        //     if (this.isShowScroll) {
        //         return this.isShowScroll = false;
        //     }
        // }
    },
    methods: {
        // 获取轮播图数据
        getSwiperData() {
            this.$axios.get("api/public/v1/home/swiperdata").then(res => {
                // console.log(res);
                this.swiperData = res.data.message;
            });
        },

        // 获取下面列表页面
        getCatItems() {
            this.$axios.get("api/public/v1/home/catitems").then(res => {
                // console.log(res);

                this.catitems = res.data.message;
            });
        },

        // 获取楼层信息
        async getFloorData() {
            const res = await this.$axios.get("api/public/v1/home/floordata");
            this.floorData = res.data.message;
            // console.log(res.data.message);
        },

        // 返回顶部
        goBack() {
            wx.pageScrollTo({
                scrollTop: 0, //滚动到页面的目标位置（单位px）,
                duration: 300 //滚动动画的时长，默认300ms，单位 ms,
            });
        }
    }
};
</script>
