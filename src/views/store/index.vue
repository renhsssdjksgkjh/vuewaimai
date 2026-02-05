<template>
    <div class="storeDetails">
        <Header title="店铺"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ data.title }}
                    <img :src="data.img" alt="" class="store-img">
                </div>
                <van-tabs color="#ffc400">
                    <van-tab v-for="(item, index) in data.storeData" :title="item.name">
                        <Foodlist :foodData="item.data" :index="index"></Foodlist>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="goCart" />
            <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
            <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
        </van-action-bar>
    </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import { reactive } from 'vue'
import Foodlist from './components/Foodlist.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

let store = useStore()
let router = useRouter()
let data = reactive({
    title: '鱼拿酸菜鱼',
    img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
    storeData: [
        {
            name: "点菜",
            data: {
                content: "点菜",
                items: [
                    {
                        text: "热销套餐",
                        children: [
                            {
                                pic: "https://img2.baidu.com/it/u=2664096885,2343975313&fm=253&app=138&f=JPEG?w=800&h=1067",
                                title: "三文鱼",
                                num: 0,
                                price: 128.0,
                                id: 0,
                                add: true,
                            },
                            {
                                pic: "https://img0.baidu.com/it/u=3843658073,2252955461&fm=253&app=120&f=JPEG?w=800&h=1067",
                                title: "烤串",
                                num: 0,
                                price: 50.0,
                                id: 1,
                                add: true,
                            },
                        ],
                    },
                    {
                        text: "超级折扣",
                        children: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "无骨酸菜鱼+肥牛双拼",
                                num: 0,
                                price: 38.0,
                                id: 5,
                                add: true,
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "香辣水煮鱼+肥牛双拼",
                                num: 0,
                                price: 42.0,
                                id: 6,
                                add: true,
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "评价",
            data: {
                content: "评价",
            },
        },
        {
            name: "商家",
            data: {
                content: "商家",
            },
        },
    ],
})

const handleAddCart = (type) => {
    const newList = store.state.cartList || []
    data.storeData.forEach((item) => {
        item.data.items?.forEach((item) => {
            item.children.forEach((item) => {
                if (item.num > 0) {
                    newList.push(item)
                }
            })
        })
    })
    if (newList.length === 0) {
        showToast('请选择商品');
        return
    }
    store.commit('addcart', newList)
    type === 'buy' ? goCart() : ''
}

const goCart = () => {
    router.push('/cart')
}

const goBuy = () => {
    handleAddCart('buy')
}
</script>

<style lang="less" scoped>
.storeDetails {
    height: 100%;
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        overflow-y: auto;

        .img {
            background: url("../../assets/yuna.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }

        .foodSort {
            height: 500px;
            background-color: #fff;
            margin-top: -30px;
            border-radius: 20px 20px 0 0;

            .sort {
                margin-top: 10px;
            }

            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;

                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>