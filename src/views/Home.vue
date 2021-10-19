<template>
<div id="app">
    <div class="half left">
        <div class="placeholderasset"><div></div></div>
    </div>
    <div class="half right">
        <h1>Build your own awseome portfolio with !!!APPNAME!!!</h1>
        <Login />
    </div>
</div>

</template>

<script>
import '../../public/style.scss'
import Login from '../components/Login'
import axios from 'axios'
const baseURL = "http://localhost:5000/users"

export default {
    name: 'Home',
    components: {
        Login,
    },
}
</script>
