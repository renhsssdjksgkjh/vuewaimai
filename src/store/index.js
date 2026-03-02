import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: [],   //购物车数据
        isDelete: true,  //确定header组件，点击编辑的时候，底部组件的展示
        edit: true,   //默认展示编辑转状态
        orderList: [],
        userAddress: JSON.parse(localStorage.getItem('userAddress')) || [{
            id: 1001,
            name: '靓仔',
            tel: '17823372572',
            province: '广东省',
            city: '深圳市',
            county: '南山区',
            addressDetail: '深圳湾',
            isDefault: true,
            areaCode: '110101',
        },
        {
            id: 1002,
            name: '靓女',
            tel: '15874859685',
            province: '湖北省',
            city: '武汉市',
            county: '武昌区',
            addressDetail: '黄鹤楼',
            isDefault: false,
            areaCode: '110101',
        },],
        orderListEnd: []
    },
    mutations: {
        addcart(state, value) {
            state.cartList = value
        },
        changeDelete(state) {
            state.isDelete = !state.isDelete
        },
        delete(state, value) {
            state.cartList = value
        },
        edit(state, value) {
            if (value) {
                state.edit = true
            } else {
                state.edit = !state.edit
            }
        },
        pay(state, value) {
            state.orderList = value
        },
        orderListEd(state) {
            state.orderListEnd = state.orderListEnd.concat(state.orderList)

        },
        addaddress(state, value) {
            if (value.isDefault) {
                state.userAddress.forEach(item => {
                    item.isDefault = false
                })
            }
            //给新增的地址手动添加id，当点击修改按钮时，item.id就不再是undefined！
            const newAddress = {
                ...value,
                id: Date.now()
            }
            state.userAddress.push(newAddress)
            localStorage.setItem('userAddress', JSON.stringify(state.userAddress))
        },
        editaddress(state, value) {
            if (value.isDefault) {
                state.userAddress = state.userAddress.map(item => {
                    if (item.id !== value.id) {
                        return { ...item, isDefault: false };
                    }
                    return item;
                });
            }

            state.userAddress = state.userAddress.map(item => {
                return item.id === value.id ? value : item;
            });
        },
        deleteaddress(state, value) {
            state.userAddress = state.userAddress.filter(item => {
                return !(item.id === value.id)
            })
            if (value.isDefault) {
                state.userAddress[0].isDefault = true
            }
            localStorage.setItem('userAddress', JSON.stringify(state.userAddress

            ))
        }
    },
    actions: {}
})