<template>
    <!-- 购买的商品列表 -->
    <div>我是购物车</div>
</template>

<script>
export default {
    data(){
        return {
            // goods_id :
        }
    },
    onLoad(options){
        console.log(options.ids);
        this.getGoodsListData = options.ids  
    },
    methods:{
        //获取本地数据
        // aysnc 
    }
}
</script>
