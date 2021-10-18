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

export default {
    name: 'Home',
    components: {
        Login,
    }
}
</script>
