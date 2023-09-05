<script setup>
import { useInterStore } from '../stores/intervention';
import {dayjs} from '@/services/api'

const store = useInterStore()

</script>

<template>

    <div class="full-container">

        <h1>Les interventions</h1>
        <div class="container">
            <div v-for="inter in store.getInters" class="inter-container" v-if="store.getIntersTotal > 0">

            <p>Intervention chez <span class="bold">{{ inter.client }}</span> effectuée le <span class="bold">{{  dayjs(inter.date).format('DD MMMM YYYY')  }}</span></p>

            <div v-if="inter.observations != ''">

                <p class="bold">Observations:</p>

                <p>{{inter.observations}}</p>

            </div>

            <div v-else>

                <p class="bold">Aucune observation fournie.</p>

            </div>

            </div>
            <div v-else>

                <p>Aucune intervention n'a été recensé.</p>

            </div>
        </div>

        

    </div>

</template>

<style lang="scss" scoped>
h1{
    display: flex;
    justify-content: center;
}

.full-container{
    font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .inter-container{
            display: flex;
            flex-direction: column;
            background-color: #3D3D33;
            margin: 20px;
            padding: 10px;
            border-radius: 20px;
            width: 40%;
        }
    }   
}
.bold{
    font-weight: bold;
}
@media screen and (max-width: 500px) {
    .full-container .container .inter-container {
        width: 70%;
  }
}
</style>