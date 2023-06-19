<template>
    <div class="navbar">
        <img src="../assets/dots.png" alt="tradeInLogo"/>
        <div style="display: flex; justify-content: space-between; width: 18%; align-items: center;">
            <img src="../assets/building.png" alt="tradeInLogo"/>
            <h5 style="font-size: medium; color: white;">{{ loginState.email }}</h5>
            <img src="../assets/caretdown.png" alt="tradeInLogo"/>
        </div>
        <input class="searchbar" type="text" placeholder="Research a client or an invoice" />   
        <div style="align-items: center; display: flex; width: 7%; justify-content: space-between">
            <img src="../assets/bell.png" alt="tradeInLogo"/>
            <p style="color: white;"> Alert (0) </p>
            <img src="../assets/caretdown.png" alt="tradeInLogo"/>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; width: 7%;" @click="handleLogout">
            <img src="../assets/face.png" alt="tradeInLogo"/>
        </div>
    </div>
</template>

<script>

import router from '@/routes';
import { useLoginState } from '@/stores/LoginState';
export default {

    setup( ) {
        const loginState = useLoginState();

        const handleLogout = () => {
            loginState.logOut('', false)
            localStorage.clear();
            router.push('/')
        }
        return {
            loginState,
            handleLogout
    }
    },
    components: {

    }

}

</script>

<style>
    .navbar {
        display: flex;
        background: linear-gradient(to right, #59A4DE, #183EA0);;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: space-around;
        margin-top: 0px;
        font-family: Helvetica, sans-serif;
    }
    .searchbar {
        display: block;
        width: 30%;
        border-radius: 50px;
        height: 80%;
        border-color: none;
        margin: 1px;
        opacity: 0.5;
        font-family: Helvetica, sans-serif;
    }

</style>