<script setup>
import logoimg from '../assets/imgs/logo-solo.png'
import BurgerMenu from './Burger.vue'
import {ref} from 'vue';

const isResponsive = ref(false)


function updateFullSideBar() {
  if(window.matchMedia("(min-width: 500)").matches){
    isResponsive.value = false
  } else{
    isResponsive.value = true
  }
}

window.addEventListener("resize", updateFullSideBar);

</script>


<template>

    <header>

        <div class="wrapper" v-if="!isResponsive">

            <img :src="logoimg" alt="Logo Clean3000">

            <nav class="navbar">
                <RouterLink to="/">Avis de passage</RouterLink>
                <RouterLink to="/liste">Liste des interventions</RouterLink>
            </nav>

        </div>
        <div v-else class="burger-menu">
            <BurgerMenu/>
        </div>

    </header>

    <RouterView />

</template>


<style scoped lang="scss">
.burger-menu{
    display: flex;
    justify-content: flex-end;
    background-color: #3D3D33;
    padding: 10px;
}
.wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3D3D33;
    width: 100%;
    height: 80px;
    img{
        height: 80px;
        margin-left: 20px;
    }
}
a{
    font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
    color: white;
    margin-left: 20px;
    padding: 30px;

    &:hover{
        background-color: #2b2b23;
    }
}
</style>