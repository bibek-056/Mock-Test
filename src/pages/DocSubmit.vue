<template>
    <Navbar />
    <div style="display: flex; justify-content: space-between">
        <div style="width: 30%;">
            <h1 style="display: flex; align-items: center; justify-content: baseline; margin: 40px; color: lightgray;">
                <button style="background-color: aliceblue; border-color: whitesmoke; border-radius: 20px; height: 40px; width: 40px; margin: 5px; color:  lightgray;"> 1</button>
                Information Review
            </h1>
            <p style="display: flex; width: 60%; font-weight: 500; font-size: larger; color: lightgray; margin-left: 80px;">
                Lorem ipsum dolor sit amet, consectetur adipiscn. Sed id ipsum vitae diam viverra aliquam. Curabitur cursus tortor sit amet magna malesuada, id volutpat ligula faucibus. Nulla facilis
            </p>
            <h1 style="display: flex; align-items: center; justify-content: baseline; margin: 40px;">
                <button style="background-color: aliceblue; border-color:white; border-radius: 20px; height: 40px; width: 40px;  margin: 5px;"> 2</button>
                Upload Documents
            </h1>
            <p style="display: flex; width: 60%; font-weight: 500; font-size: larger; color: black; margin-left: 80px;">
                Lorem ipsum dolor sit amet, consectetur adipiscn. Sed id ipsum vitae diam viverra aliquam. Curabitur cursus tortor sit amet magna malesuada, id volutpat ligula faucibus. Nulla facilis
            </p>        
        </div>
        <div>
            <DocForm/>
        </div>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import DocForm from '@/components/DocForm.vue';
import { useLoginState } from '@/stores/LoginState';
import { useRouter } from 'vue-router';

export default {
    setup () {
        const loginState = useLoginState();
        const router = useRouter();

        const storedLoginState = JSON.parse(localStorage.getItem('loginState'));
        if (storedLoginState) {
        loginState.email = storedLoginState.email;
        loginState.loggedIn = storedLoginState.loggedIn;
        } else {
        router.push('/');
        }

        return (loginState);
    },
    components: {
        Navbar,
        DocForm
    }
}


</script>
