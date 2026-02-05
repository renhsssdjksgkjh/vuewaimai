<template>
    <Header :title="address"></Header>
    <van-address-edit :area-list="data.areaList" show-delete show-set-default show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
        :address-info="data.addressInfo" />
</template>

<script setup>
import Header from '../../../components/Header.vue';
import { reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { showToast } from 'vant';

const store = useStore()
const route = useRoute()
const router = useRouter()
const data = reactive({
    areaList: {
        province_list: {
            110000: "广东省",
            120000: "浙江省",
        },
        city_list: {
            110100: "广州市",
            110200: "深圳市",
            120100: "杭州市",
            120200: "宁波市",
        },
        county_list: {
            110101: "天河区",
            110102: "海珠区",
            120102: "上城区",
            130102: "下城区",
        }
    },
    addressInfo: {}
})

const onSave = (content) => {
    if (route.query.type === 'add') {
        store.commit('addaddress', content)
    } else {
        store.commit('editaddress', content)
    }
    showToast('保存成功喽！')
    setTimeout(() => {
        router.back()
    }, 1000)
}

const onDelete = (content) => {
    store.commit('deleteaddress', content)
    showToast('删除成功喽！')
    setTimeout(() => {
        router.back()
    }, 1000)
}

const address = computed(() => {
    return route.query.type === 'add' ? '新增地址' : '地址编辑'
})

const init = () => {
    store.state.userAddress.forEach((item) => {
        if (item.id === Number(route.query.id)) {
            data.addressInfo = item
        }
    })
}

onMounted(() => {
    init()
})

</script>

<style lang="less" scoped>
/deep/ .van-button--primary {
    background-color: #ffc400;
    border-color: #ffc400;
}
</style>