<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <button v-if="$store.state.isLogin" @click="logout">注销</button>
        </div>
        <router-view />
    </div>
</template>
<script>
import axios from 'axios';
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    },
    created() {
        setTimeout(function() {
            axios.get('/api/userinfo', {});
        }, 2000);
    }
};
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
