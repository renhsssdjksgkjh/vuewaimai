<template>
    <Header title="账号管理"></Header>
    <div>
        <van-field v-model="data.username" label="账号" placeholder="请输入账号" />
        <van-field v-model="data.sign" label="个性签名" placeholder="个性签名" disabled />
        <van-field v-model="data.password" label="密码" placeholder="请输入密码" />
    </div>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="save">保存</van-button>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="logOut">退出登录</van-button>
</template>

<script setup>
import { showToast } from 'vant'
import Header from '../../components/Header.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = reactive({
    username: '',
    sign: '前端大神米姐的徒弟',
    password: ''
})

const save = () => {
    if (data.username && data.password) {
        let userInfo = JSON.parse(localStorage.userInfo)
        let newUserInfo = {
            username: data.username || userInfo.username,
            password: data.password || userInfo.password
        }
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
        showToast('修改成功')
        setTimeout(() => {
            router.push('/mine')
        }, 500);
    } else {
        showToast('请输入内容')
    }
}

const logOut = () => {
    localStorage.removeItem('isLogin')
    showToast('退出成功！')
    setTimeout(() => {
        router.push('/login')
    }, 500);
}

</script>

<style lang="less" scoped>
.save-btn {
    width: 80%;
    margin: 20px auto;
}
</style>