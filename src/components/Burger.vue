<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const hamburgerOpen = ref(false)
const isConnected = ref(false)




</script>

<template>

    <div class="hamburger" @click="hamburgerOpen = !hamburgerOpen" :class="hamburgerOpen ? 'hamburger--is-open' : ''" >
        <div class="hamburger__item hamburger__item--first"></div>
        <div class="hamburger__item hamburger__item--middle"></div>
        <div class="hamburger__item hamburger__item--last"></div>
    </div>  

    <div v-if="hamburgerOpen" class="burger-menu">

        <div class="burger-open-menu">
            <RouterLink to="/">Avis de passage</RouterLink>
            <RouterLink to="/liste">Liste des interventions</RouterLink>

                    
            </div>
                
        </div>


</template>


<style lang="scss" scoped>

.burger-menu{
    font-family: Roboto;
    position: absolute;
    width: 100%;
    margin-top:40px;
    background-color: #3D3D33;
    left: 0;

}

.burger-open-menu{
    display: flex;
    flex-direction: column;
    a{
        margin: 10px;
        color: white;
        text-decoration: none;
        margin-left:20px;
    }
    .log-class{
        width: 85px;
    }
}

.hamburger {
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
  }
  
  &__item {
    height: 4px;
    width: 100%;
    background: white;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 300ms linear;
    
    &--first {
      .hamburger--is-open & {
        transform: translate(0, 12px) rotate(45deg);
      }
    }
    
    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }
    
    &--last {
      .hamburger--is-open & {
        transform: translate(0, -14px) rotate(-45deg);
      }
    }
  }
}

</style>