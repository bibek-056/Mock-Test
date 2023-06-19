<template>
    <div class="navbar">
        <div style="width: 5%;">
            <img src="../assets/dots.png" alt="tradeInLogo"/>
        </div>
        <div style="display: flex; justify-content: space-between; width: 18%; align-items: center;">
            <div style="position: relative; display: inline-block;">
                <img src="../assets/plaincircle.png" alt="tradeInLogo" />
                <img src="../assets/building.png" alt="tradeInLogo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />
            </div>
            <h5 style="font-size: 14px; font-weight: 900; color: #FFFFFF; line-height: 22.4px;"> SOBEM SCAME</h5>
            <img src="../assets/caretdown.png" alt="tradeInLogo"/>
        </div>
        <div style="position: relative;">
            <input class="searchbar" type="string" placeholder="Research a client or an invoice" />
            <img src="../assets/search.png" alt="tradeInLogo" style="position: absolute; top: 50%; left: 15px; transform: translateY(-50%);" />
        </div>
        <div style="align-items: center; display: flex; width: 8%; justify-content: space-between">
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
    }
    .searchbar {
        display: block;
        width: 515px;
        border-radius: 55px;
        height: 40px;
        border-color: none;
        color: black;
        border: 0px;
        margin: 1px;
        opacity: 0.6;
        padding-left: 40px;
    }

</style>