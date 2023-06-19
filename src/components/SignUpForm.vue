<template>
    <div class="container">
        <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin-top: 20px; margin-bottom: 50px; width: 50%;">
            <img src="../assets/Logo.png" alt="tradeInLogo" />
        </div>
        <form style="width: 50%;" @submit.prevent="handleSubmit">
            <div class="form">
                <div>
                    <h2 style="margin: 2px;">Sign Up</h2>
                    <p style="margin: 2px; padding-left: 2px;">Create your account for free.</p>
                </div>
                <div>
                <div style="display: flex; flex-flow: row; justify-content: space-between; width: 110%;">
                    <input class="form-input" type="string" required placeholder="First Name*"/>
                    <input class="form-input" type="string" required placeholder="Last name*"/>
                </div>
                  <input class="form-input" type="email" required v-model="email" placeholder="Enter your email"/>
                  <input class="form-input" type="number" required placeholder="Enter your phone number"/>
                    <div>
                        <div style="position: relative;">
                            <input class="form-input" type="password" required v-model="password" placeholder="......." />
                            <img src="../assets/eye.png" alt="tradeInLogo" style="position: absolute; top: 50%; right: 0px; transform: translateY(-50%);" />
                            <div v-if="passwordError" style="color: red;">{{ passwordError }}</div>
                        </div>
                        <p style="font-size: 12px; margin-top: 1px; margin-left: 3px; ">Must be atleast 8 characters.</p>
                    </div>
                    <div style="width: 110%;">
                        <p style="text-align: left; font-size: 12px; " > Vous aves un code promo?</p>
                        <input type="checkbox" required>
                        <label style="font-size: 12px;">By clicking I agree to <a href="TradeIn's Terms and Conditions">TradeIn's Terms and Conditions</a> and acknowlege that I have read and understood <a href="TradeIn's Privacy statement.">TradeIn's Privacy statement.</a></label><br>
                        <input type="checkbox">
                        <label style="font-size: 12px; ">Yes, I would like to keep in touch.</label>
                    </div>
                </div>
                    <div>
                        <button style="width: 340px; height: 49px; background-color: #003DA5; color: white; border-radius: 5px;margin: 5px; align: center; border: 1px;">GET STARTED</button>
                        <button style="width: 340px; height: 49px; background-color: whitesmoke; font-size: 16px; border-radius: 5px; margin: 5px; border: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            <img src="../assets/google.png" alt="tradeInLogo"/><p style="font-size: 14px;  margin: 8px;">Sign in with Google</p>
                        </button>
                        <p style="text-align: center; font-size: 14px; ">Already have an account? <span style="color: #003DA5; font-size: 14px; " @click="goToSignin">Sign in.</span></p>
                    </div>                
            </div>
        </form>
        <div class="bottom">
            <p style="text-align: center; font-size: 12px; color: #959595;">Copyright &copy; 2021. All rights reserved. Websites Designed by TradeIn.</p>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginState } from '../stores/LoginState'

export default {
    setup() {
    const loginState = useLoginState();
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const passwordError = ref("");

    const goToSignin = () => {
        router.push("/");
    }

    const handleSubmit = () => {
      passwordError.value = password.value.length >= 8 ? "" : "Password should be at least 8 characters";
      
      if (!passwordError.value) {
        loginState.logIn(email.value, true);
        localStorage.setItem('loginState', JSON.stringify({
            email: loginState.email,
            loggedIn: loginState.loggedIn
        }));
        router.push("/dashboard"); 
      }
    }
    return {
      email,
      password,
      passwordError,
      handleSubmit,
      goToSignin,
    };
  },
}
</script>

 <style>
    .container {
        display: flex;
        flex-flow: column;
        text-align: left;
    }
    .login-button {
        width: 100%;
        height: 50px;
        background: rgb(10, 10, 187);
        color: white;
        border-radius: 5px;
        margin: 5px;
        border: 1px;

    }
    .bottom {
        margin-top: 120px;
        margin-bottom: 10px;
    }
    
</style>