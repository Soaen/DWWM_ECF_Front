<script setup>
import { useInterStore } from '../stores/intervention';

const store = useInterStore

</script>

<template>

    <div>

        <h1>Liste</h1>

        <div v-for="inter in store.getInters" class="inter-container">

            <p>{{ inter.name }}</p>

        </div>

    </div>

</template>