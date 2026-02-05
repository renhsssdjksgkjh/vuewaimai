<template>
    <div class="register">
        <Header title="注册"></Header>
        <div class="img">恰饭</div>
        <van-form @submit="onSubmit">
            <van-field v-model="data.username" name="username" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="data.password" type="密码" name="password" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    注册
                </van-button>
                <van-button round block type="info" class="register" color="#ffc400" @click="toLogin">
                    去登录
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
const toLogin = () => {
    router.push('/login')
}

const onSubmit = (value) => {
    if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo.username === value.username) {
            showToast('用户名已经存在')
            return 
        } else {
            register(value)
        }
    }
    register(value)
}

const register = (value) => {
    localStorage.setItem('userInfo', JSON.stringify(value))
    showToast('注册成功！')
    router.push('/login')
}

</script>

<style lang="less" scoped>
.register {
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