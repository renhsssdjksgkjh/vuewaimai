<template>
    <div class="login">
        <Header title="登录"></Header>
        <div class="img">恰饭</div>
        <van-form @submit="onSubmit">
            <van-field v-model="data.username" name="username" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="data.password" type="密码" name="password" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    登录
                </van-button>
                <van-button round block type="info" class="register" color="#ffc400" @click="toRegister">
                    先注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import Header from '../../components/Header.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { showToast } from 'vant'

const data = reactive({
    username: '',
    password: ''
})

const router = useRouter()
const toRegister = () => {
    router.push('/register')
}

const onSubmit = (value) => {
    if (!localStorage.userInfo) {
        showToast('账号不存在！')
        return
    } else {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo.username === value.username) {
            if (userInfo.password === value.password) {
                showToast('登录成功喽！')
                localStorage.setItem('isLogin', 'login')
                setTimeout(() => {
                    router.push('/home')
                }, 500);
            } else {
                showToast('密码不正确！')
            }
        } else {
            showToast('账号不存在！')
        }
    }
}

</script>

<style lang="less" scoped>
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>