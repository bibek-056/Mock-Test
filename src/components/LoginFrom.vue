<template>
    <div class="container">
        <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin-top: 50px; margin-bottom: 200px; width: 50%;">
            <img src="../assets/Logo.png" alt="tradeInLogo" width="125" height="60" />
        </div>
        <form style="width: 50%;" @submit.prevent="handleSubmit">
            <div class="form">
                <div>
                    <h2 style="margin: 2px;">Welcome back</h2>
                    <p style="margin: 2px; padding-left: 2px;">Welcome back! Please enter your details.</p>
                </div>
                <div>
                  <input class="form-input" type="email" required v-model="email" placeholder="Enter your email"/>
                  <div>
                    <input class="form-input" type="password" required v-model="password" placeholder="......." />
                    <div v-if="passwordError" style="color: red;">{{ passwordError }}</div>
                    <!-- <font-awesome-icon icon="eye" class="password-toggle" @click="togglePasswordVisibility" /> -->
                </div>
                    <div style="display: flex; flex-flow: row; justify-content: space-between; align-content: center;">
                        <div>
                            <input type="checkbox" v-model="memory"/>
                            <label style=" font-size: medium;">Remember for 30 days</label>
                        </div>
                        <div>
                            <span style="font-size: medium; color: blue;"> Forgot Password?</span>
                        </div>
                    </div>
                </div>
                    <div>
                        <button style="width: 100%; height: 50px; background-color: blue; color: white; border-radius: 5px;margin: 5px; align: center; border: 1px;">GET STARTED</button>
                        <button style="width: 100%; height: 50px; background-color: whitesmoke; font-size: 16px; border-radius: 5px; margin: 5px; border: 1px solid black;">
                             Sign in with Google
                        </button>
                        <p style="text-align: center; font-size: medium;">Don't have an account? <span @click="goToSignup">Sign up.</span></p>
                    </div>                
            </div>
        </form>
        <div class="bottom">
            <p style="text-align: center; font-size: smaller; margin-top: 150px;">Copyright &copy; 2021. All rights reserved. Websites Designed by TradeIn.</p>
        </div>
    </div>
</template>

<script>

// import logo  from '../assets/Logo.png'
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

    const goToSignup = () => {
        router.push("/signup");
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
      goToSignup,
    };
  },
};

</script>

 <style>
    .container {
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: left;
    }
    .form-input {
        border: 1px solid #CCCCCC;
        height: 40px;
        width: 100%;
        background-color:whitesmoke;
        
        padding: 5px;
        margin: 10px;
        font-size: 14px;
        border-radius: 10px;
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
        margin-top: 200px;
        margin-bottom: 10px;
    }
    
</style>