<template>
    <div class="navbar">
        <font-awesome-icon icon="bars" />
        <div style="display: flex; justify-content: space-between; width: 18%; align-items: center;">
            <button style="border-color:gray; border-width: 2px; border-radius: 20px; height: 40px; width: 40px;"><font-awesome-icon icon="building" /></button>
            <h5 style="font-size: medium;">{{ loginState.email }}</h5>
            <font-awesome-icon icon="caret-down" />
        </div>
        <input class="searchbar" type="text" placeholder="Research a client or an invoice" />   
        <div style="align-items: center; display: flex; width: 5%; justify-content: space-between">
            <font-awesome-icon icon="bell" />
            <p> Alert </p>
            <font-awesome-icon icon="caret-down"/>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; width: 7%;" @click="handleLogout">
            <font-awesome-icon icon="user"/><p>Log Out</p>
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
        background: linear-gradient(to right, #3e99f3, #3f3fe8);;
        width: 100%;
        height: 65px;
        align-items: center;
        justify-content: space-around;
        margin-top: 0px;
    }
    .searchbar {
        display: block;
        width: 30%;
        border-radius: 50px;
        height: 80%;
        border-color: none;
        margin: 1px;
        opacity: 0.5;
    }

</style>