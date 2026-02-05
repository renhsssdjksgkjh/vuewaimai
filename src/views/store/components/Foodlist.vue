<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="55vw" :items="data.items"
            @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in data.subItem" :key="index" class="item-bg">
                    <list-item :item="item" :handleAdd="handleAdd" :handleChange="handleChange"></list-item>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import ListItem from '../../../components/ListItem.vue'

const props = defineProps({
    foodData: Object,
    index: Number
})
let data = reactive({
    activeIndex: 0,
    items: [],
    subItem: []
})

const initData = () => {
    let newArray = []
    props.foodData?.items?.forEach((item, index) => {
        newArray.push({
            text: item.text
        })
        if (data.activeIndex == index) {
            data.subItem = item.children
        }
    })
    data.items = newArray
}

initData()

const handleAdd = (id) => {
    data.subItem.forEach((item, index) => {
        if (item.id == id) {
            item.add = false
            item.num += 1
        }
    })
}

const handleChange = (value, detail) => {
    data.subItem.forEach((item) => {
        if (item.id === detail.name) {
            item.num = value
        }
    })
}

const navClick = (i) => {
    data.activeIndex = i
    initData()
}
</script>


<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>