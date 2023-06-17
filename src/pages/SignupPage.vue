<template>
    <div style="display: flex; flex-flow: row;">
        <div style="width: 50%;">
            <SignUpForm/>
        </div>
        <div style="width: 50%;height: 100vh;">
            <img src="../assets/graphic.png" alt="tradeInLogo" style="width: 100%; height: max-content; object-fit: cover"/>
        </div>
    </div>
    
</template>

<script>

import SignUpForm from '@/components/SignUpForm.vue';

export default {
    components: {
    SignUpForm
},
}

</script>

<style>

</style>