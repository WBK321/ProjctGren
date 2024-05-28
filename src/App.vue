<script>
import Logo from './components/Logo.vue';
import Main from './components/Main.vue';
import Middle from './components/Middle.vue';
import Pelvis from './components/Pelvis.vue';
import Comment from './components/Comment.vue';
import Footer from './components/Footer.vue';

import { RouterView } from 'vue-router';

export default{
    components:{
        Logo,
        Main,
        Middle,
        Pelvis,
        Comment,
        Footer,
        RouterView
    }
}
</script>

<template>

    <Logo></Logo>
    <Main></Main>
    <Middle></Middle>
    <Pelvis></Pelvis>
    <Comment></Comment>
    <Footer></Footer>
    
</template>
 
<style>

</style>
