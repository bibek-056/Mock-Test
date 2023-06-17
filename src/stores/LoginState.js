import { defineStore } from "pinia";

export const useLoginState = defineStore('loginState', {
    state: () => ({
        email: '', 
        loggedIn: false
    }),

    actions: {
        logIn(email, loggedIn) {
            this.email = email;
            this.loggedIn = loggedIn
        },
        logOut(email, loggedIn) {
            this.email = email;
            this.loggedIn = loggedIn
        }

    }
})