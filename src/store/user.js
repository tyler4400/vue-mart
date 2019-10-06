import us from '@/service/user';

export default {
    state: {
        isLogin: Boolean(sessionStorage.getItem('vue-mart-token'))
    },
    mutations: {
        setLoginState(state, b) {
            state.isLogin = b;
        }
    },
    actions: {
        login({ commit }, user) {
            // 登录请求
            return us.login(user).then(res => {
                const { code, token } = res.data;
                if (code) {
                    // 登录成功
                    commit('setLoginState', true);
                    sessionStorage.setItem('vue-mart-token', token);
                }
                return code;
            });
        },
        logout({ commit }) {
            // 清缓存
            sessionStorage.removeItem('vue-mart-token');
            // 重置状态
            commit('setLoginState', false);
        }
    }
};
