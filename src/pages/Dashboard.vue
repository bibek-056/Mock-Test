<template>
  <div>
    <Navbar/>
    <Card/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
import { useLoginState } from '@/stores/LoginState';
import { useRouter } from 'vue-router';

export default{
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
    components : {
        Navbar,
        Card
    },
}


</script>
