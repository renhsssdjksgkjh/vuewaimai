<template>
    <div v-for="(item,index) in list">
        <NavListItem :itemContent="item"></NavListItem>
    </div>
</template>

<script setup>
import NavListItem from './NavListItem.vue';
defineProps(['list'])
</script>
