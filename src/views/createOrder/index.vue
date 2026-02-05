<template>
    <div class="create-order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="data.tel" :name="data.name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic"></van-card>
            </div>
            <div class="pay-wrap">
                <div class="price">
                    <span>商品金额</span>
                    <span>￥{{ data.totalPrice }}</span>
                </div>
                <van-button type="primary" class="pay-btn" block color="#ffc400"
                    @click="handleCreateOrder">生成订单</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '../../components/Header.vue'
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { showDialog } from 'vant'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useStore()
const data = reactive({
    tel: '17823372571',
    name: '靓仔',
    totalPrice: 0
})

const initPrice = () => {
    let price = 0
    if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
            price += item.num * item.price
        })
    }
    data.totalPrice = price
}

const initUser = () => {
    store.state.userAddress.forEach((item) => {
        if (item.isDefault) {
            data.tel = item.tel
            data.name = item.name
        }
    })
}

const handleCreateOrder = () => {
    showDialog({
        title: '提示',
        message: '生成订单成功！',
    }).then(() => {
        //生成订单时，要把购物车中已经选中变成订单的那部分给剔除
        let newList = store.state.cartList.filter((item) => {
            return !route.query.list.includes(item.id + '')
        })
        store.commit('delete', newList)
        store.commit('orderListEd')
        router.push('/order')
    });
}

onMounted(() => {
    initPrice()
    initUser()
})

const onEdit = () => {
    router.push('/address')
}
</script>

<style lang="less" scoped>
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;
        position: fixed;
        bottom: 0px;

        .price {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;

        }
    }
}
</style>