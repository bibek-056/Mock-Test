<template>
    <Navbar />
    <div style="display: flex; justify-content: space-between">
        <div style="width: 30%;">
            <h1 style="display: flex; align-items: center; justify-content: baseline; margin: 40px; margin-bottom: 20px; font-size: 24px;color: #212121; font-weight: 600;">
                <div style="position: relative; display: inline-block; margin-right: 20px;">
                    <img src="../assets/tickCircle.png" alt="tradeInLogo" width="40px" height="40px">
                    <img src="../assets/tick.png" alt="tradeInLogo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                </div>
                Information Review
            </h1>
            <p style="display: flex; width: 80%; font-weight: 400; font-size: larger; color: black; margin-left: 90px ; letter-spacing: 0.15px;">
                Sit tristique eget proin a sem. Dui risus ultricies at vel consectetur volutpat ornare netus id.
            </p>
            <h1 style="display: flex; align-items: center; justify-content: baseline; margin: 40px; margin-bottom: 20px; color: #003DA5; font-size: 24px;">
                <div style="position: relative; display: inline-block; margin-right: 20px ">
                    <img src="../assets/bluecircle.png" alt="tradeInLogo" width="40px" height="40px">
                    <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; color: white; text-align: center; width: 100%; align-items: center;">2</span>
                </div>
                Upload Documents
            </h1>
            <p style="display: flex; width: 70%; font-weight: 400; font-size: larger; color: black; margin-left: 90px;">
                Vel consectetur ut enim eu amet cras non risus pellentesque. Faucibus sagittis et facilisi tristique quam id.       
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
