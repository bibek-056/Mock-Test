<template>
    <div style="display: flex; flex-flow: row;">
        <div style="width: 50%;">
            <LoginFrom/>
        </div>
        <div style="position: relative;">
        <img src="../assets/Section.png" alt="tradeInLogo" style="width: 100%; height: max-content; object-fit: cover" />
            <div style="position: absolute; top: 5%; left: 80%; transform: translate(-50%, -50%); display: flex; align-items: center;">
                <img src="../assets/globe.png" alt="tradeInLogo" style=" margin-right: 8px;" />
                <span style="color: black;">FR</span>
                <img src="../assets/caretdownblack.png" alt="tradeInLogo" style=" margin-left: 8px;" />
            </div>
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