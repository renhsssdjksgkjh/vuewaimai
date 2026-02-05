<template>
    <Header title="地址管理"></Header>
    <van-address-list :list="data.list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
</template>

<script setup>
import Header from '../../components/Header.vue'
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const data = reactive({
    list: []
})

const init = () => {
    data.list = store.state.userAddress.map((item) => {
        return {
            id: item.id,
            name: item.name,
            tel: item.tel,
            address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
            isDefault: item.isDefault
        }
    })
}

onMounted(() => {
    init()
})

const onAdd = () => {
    router.push({
        path: '/addressedit',
        query: {
            type: 'add'
        }
    })
}

const onEdit = (item) => {
    router.push({
        path: '/addressedit',
        query: {
            type: 'edit',
            id: item.id
        }
    })
}
</script>

<style lang="less" scoped>
/deep/ .van-button--primary {
    background-color: #ffc400;
    border-color: #ffc400;
}
</style>