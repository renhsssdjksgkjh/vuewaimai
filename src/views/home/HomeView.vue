<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">
                    外卖
                </div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>上海汤臣一品</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主要内容区域 -->
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item, index) in data.big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(item, index) in data.small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="van-tabs">
                    <van-tab v-for="(item, index) in data.centent_nav_list" :key="index" :title="item.tab">
                        <navlist :list="item.data"></navlist>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '../../components/Footer.vue'
import { reactive, ref } from 'vue'
import navlist from './components/NavList.vue';

const active = ref(0)

let data = reactive({
    big_sort: [
        {
            name: "美食",
            icon: "icon-icon_meishi",
        },
        {
            name: "甜点饮品",
            icon: "icon-tiandian",
        },
        {
            name: "超市便利",
            icon: "icon-chaoshigouwu",
        },
        {
            name: "生鲜果蔬",
            icon: "icon--vegetables",
        },
        {
            name: "买药",
            icon: "icon-maiyao",
        },
    ],
    small_sort: [
        {
            name: "午餐",
            icon: "icon-wucan",
        },
        {
            name: "买酒",
            icon: "icon-jiushui",
        },
        {
            name: "新鲜水果",
            icon: "icon-xinxianguoshu_xinxianshuiguochengzi",
        },
        {
            name: "汉堡披萨",
            icon: "icon-hanbaopisa",
        },
        {
            name: "休闲饮品",
            icon: "icon-icon_juice",
        },
        {
            name: "夜宵",
            icon: "icon-yexiao",
        },
        {
            name: "吐司",
            icon: "icon-tusi",
        },
        {
            name: "跑腿",
            icon: "icon-paotuiAPP",
        },
        {
            name: "美人佳丽",
            icon: "icon-kouhong",
        },
        {
            name: "全部分类",
            icon: "icon-quanbufenlei",
        },
    ],
    centent_nav_list: [
        {
            tab: "天天神券",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["重邮门店", "可配送进校"],
                },
                {
                    pic: "https://qcloud.dpfile.com/pc/607mYx6JLDs01xuWd0wpRtbslBv4rq02YZ62kBYUqA9_s19RoDoKq-qnEG-HKmy0.jpg",
                    title: "隆江猪脚饭",
                    sales: "256",
                    price: "15",
                    label: ["重邮门店", "外卖自取"],
                },
                {
                    pic: "https://qcloud.dpfile.com/pc/YxVTgyWZX6kg5oIvd68-Zx0Wjkpsa_j4K5imReb6DVOddsqsSsc-Nlpxeueo9Ou6.jpg",
                    title: "披萨",
                    sales: "200",
                    price: "13",
                    label: ["重邮门店", "可配送进校"],
                },
                {
                    pic: "https://q4.itc.cn/images01/20250829/1b695077fa834bb18d6b8acca378a332.jpeg",
                    title: "三文鱼",
                    sales: "2888",
                    price: "128",
                    label: ["重邮门店", "外卖自取"],
                },
            ],
        },
        {
            tab: "减配送费",
            data: [
                {
                    pic: "https://q4.itc.cn/images01/20250829/1b695077fa834bb18d6b8acca378a332.jpeg",
                    title: "三文鱼",
                    sales: "333",
                    price: "128",
                    label: ["超划算", "可配送进校"],
                },
            ],
        },
        {
            tab: "点评高分",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "会员满减",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
    ],
}
)
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;

    .content {
        flex: 1;
        overflow-y: auto;

        .header {
            background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;

            .text {
                font-weight: 600;
                font-size: 20px;
            }

            .location {
                .span {
                    margin: 0 5px;
                }

                font-size:14px;
            }
        }

        .main {
            margin-top: -30px;

            .main-bg {
                border-radius: 30px 30px 0px 0px;
                background-image: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0 20px;

                .search {
                    position: relative;

                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;

                    }

                    .search-text {
                        position: absolute;
                        top: 0;
                        right: -6px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        font-size: 14px;
                    }
                }

                .sort {
                    padding: 20px 0;

                    .big-sort {
                        display: flex;

                        div {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .icon {
                                height: 50px;
                                width: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }

                    .small-sort {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;

                        div {
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            width: 20%;

                            .icon {
                                width: 30px;
                                height: 30px;
                                margin: 10px 15px;
                            }
                        }
                    }
                }
            }

            .van-tabs {
                padding: 0 20px 10px;
            }
        }
    }
}

:deep(.van-tabs__wrap) {
    border-radius: 10px;
}
</style>