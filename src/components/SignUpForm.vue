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
                        <input class="form-input" type="password" required v-model="password" placeholder="Create password"/>
                        <p style="font-size: small; margin-top: 1px; margin-left: 3px; font-family: Helvetica, sans-serif;">Must be atleast 8 characters.</p>
                    </div>
                    <div style="width: 110%;">
                        <p style="text-align: left; font-size: small; font-family: Helvetica, sans-serif;" > Vous aves un code promo?</p>
                        <input type="checkbox" required>
                        <label style="font-size: small; font-family:Helvetica, sans-serif;">By clicking I agree to <a href="TradeIn's Terms and Conditions">TradeIn's Terms and Conditions</a> and acknowlege that I have read and understood <a href="TradeIn's Privacy statement.">TradeIn's Privacy statement.</a></label><br>
                        <input type="checkbox">
                        <label style="font-size: small; font-family: Helvetica, sans-serif;">Yes, I would like to keep in touch.</label>
                    </div>
                </div>
                    <div>
                        <button style="width: 104%; height: 50px; background-color: blue; color: white; border-radius: 5px;margin: 5px; align: center; border: 1px;">GET STARTED</button>
                        <button style="width: 104%; height: 50px; background-color: whitesmoke; font-size: 16px; border-radius: 5px; margin: 5px; border: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            <img src="../assets/google.png" alt="tradeInLogo"/><p style="font-size: 14px; font-family: Helvetica, sans-serif; margin: 8px;">Sign in with Google</p>
                        </button>
                        <p style="text-align: center; font-size: medium; font-family: Helvetica, sans-serif;">Already have an account? <span style="color: blue; font-size: medium; font-family: Helvetica, sans-serif;" @click="goToSignin">Sign in.</span></p>
                    </div>                
            </div>
        </form>
        <div class="bottom">
            <p style="text-align: center; font-size: smaller;">Copyright &copy; 2021. All rights reserved. Websites Designed by TradeIn.</p>
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