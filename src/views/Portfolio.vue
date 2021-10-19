<template>
<div id="app">
    <div class="half left">
        <BioOne :id="id" />
    </div>
    <div class="half right">
        <CredsOne :id="id" />
    </div>
</div>
</template>

<script>
import '../../public/style.scss'
import BioOne from '../components/BioOne'
import CredsOne from '../components/CredsOne'

export default {
    name: 'Portfolio',
    data() {
        return{
            id: this.$route.params.id
        }
    },
    components: {
        BioOne,
        CredsOne,
    },
}

</script>

<style lang="scss" scoped> //MOVE TO GLOBAL SCSS FILE LATER or component scss idk yet

// === COLOR VARIABLES
$bg: #060e2b;
$offwhite: #F7F0F5;
$red: #E64B37;
$pink: #FC8474;
$blue: #2A3B7A;
$lblue: #7C90D9;
// ---

.left {
    background-image: linear-gradient(to bottom right, $bg, $blue, $pink);
    overflow: hidden;
}

.right {
    display: inline-block;
    background-color: $offwhite;
    height: 100vh;
    overflow-y: scroll;
    padding: 80px;
}
    

</style>