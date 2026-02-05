<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack" />
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click="handleEdit">{{ store.state.edit ? '编辑' : '完成' }}</div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { showToast } from 'vant'

defineProps(['title', 'edit'])

const router = useRouter()
const store = useStore()
const toBack = () => {
    router.back()
}

const handleEdit = () => {
    if (store.state.cartList.length) {
        store.commit('changeDelete')
    }
    else {
        showToast('先去shopping吧，靓仔！')
    }
}

</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>