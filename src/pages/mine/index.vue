<template>
    <view>我的

        <button @click="openAuth">我要授权</button>
        <button @click="openVideo">我要录音</button>
    </view>
    
</template>
<script>
export default {
    methods:{
        openAuth(){
            wx.openSetting({})
        },
        openVideo(){
            wx.startRecord()
        }
    }
}
</script>

