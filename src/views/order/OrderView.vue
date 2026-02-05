<template>
    <div class="order">
        <Header title="订单"></Header>
        <div class="content">
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in data.navData">
                    <div v-for="(i, index) in store.state.orderListEnd"
                        v-if="store.state.orderListEnd.length && item === '全部'">
                        <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
                    </div>
                    <div v-else>
                        <Empty title="去下单吧，宝！"></Empty>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import Empty from '../../components/Empty.vue'
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const data = reactive({
    navData: ['全部', '交易完成', '代付款', '待发货', '已发货']
})

</script>

<style lang="less" scoped>
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>