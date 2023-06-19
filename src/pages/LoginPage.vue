<template>
    <div style="display: flex; flex-flow: row;">
        <div style="width: 50%;">
            <LoginFrom/>
        </div>
        <div>
            <img src="../assets/Section.png" alt="tradeInLogo" style="width: 100%; height: max-content; object-fit: cover"/>
        </div>
    </div> 
</template>

<script>

import LoginFrom from '@/components/LoginFrom.vue';

export default {
    components: {
        LoginFrom
    },
}

</script>

<style>

</style>