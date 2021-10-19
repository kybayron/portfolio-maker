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

export default {
    name: 'Home',
    components: {
        Login,
    },
    methods: {
    async getData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/login/auth"
        );
        // JSON responses are automatically parsed.
       console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount(){
    this.getData();
  }
}
</script>
