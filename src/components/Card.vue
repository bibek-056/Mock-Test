<template>
    <div class="dashboard">
        <div class="card">
            <div class="header">
                <div style="display: flex; flex-flow: column; margin-left: 30px; margin-right: 30px; margin-top: 30px; margin-bottom: 30px;">
                    <h5 style="font-size: larger;font-weight: 7000; margin-left: 10px; margin-bottom: 2px; margin-top: 10px; margin-right: 2px;">My enterprises</h5>
                    <p style="font-size: medium; font-weight: 100; margin-left: 10px; margin-top: 2px; margin-bottom: 2px;">Manage and Access your enterprizes.</p>
                </div>
                <div style="display: flex; align-items: center; margin-right: 30px;">
                    <button class="card-button" @click="goToRegistration"> + Add New Organization</button>
                </div>
            </div>
            <hr/>
            <div v-if="storedLoginState"  class="enterprise">
                <div style="display: flex; align-items: center; width: 15%;">
                    <button style="border-color:gray; border-width: 2px; border-radius: 20px; height: 40px; width: 40px;"><font-awesome-icon icon="building" /></button>
                </div>
                <div style="display: flex; flex-flow: column; align-items: flex-start; width: 55%;">
                    <h1 style="font-size: larger; margin: 2px;">{{  displayName }}</h1>
                    <h5 style="font-size: medium; margin: 2px;"> Created at: {{displayDate}} </h5>
                    <h5 style="font-size: medium; margin: 2px;"> Siret ID: {{ ID }}</h5>
                </div>
                <div style="display: flex; justify-content: space-evenly; align-items: center;width: 30%;">
                    <button style="border-color:blue; border-width: 2px; border-radius: 5px; height: 40px; width: 140px;">Manage</button>
                    <button style="border-color:blue; border-width: 2px; border-radius: 5px; height: 40px; width: 40px;"><font-awesome-icon icon="bars" /></button>
                </div>
            </div>
        </div>
    </div>

    

</template>

<script>
    
    export default {
        setup() {
        
        const storedLoginState = JSON.parse(localStorage.getItem('enterprise'));
        let displayName;
        let displayDate;
        let ID;
        console.log (storedLoginState)
        if (storedLoginState) {
            displayName = storedLoginState.companyName
            ID = storedLoginState.siretID
            displayDate = storedLoginState.createdDate
            console.log( displayName )
            console.log( ID )
            console.log( displayDate )
        }
        return {
            storedLoginState, displayName, ID, displayDate
        }
        },
        components: {
    
        },
        methods: {
            goToRegistration() {
                this.$router.push('/registration');
            }
        }


}

</script>

<style>
    .dashboard {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .card {
        display: flex;
        flex-flow: column;
        margin: 20px;
        background-color:white;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(1, 1, 1, 1);
        width: 60%;
        height: max-content;
        border-color: black;
        border-width: 2px;
        justify-content: space-between;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .card-button {
        display: inline-block;
        height: 30%;
        width: max-content;
        padding: 6px 12px;
        background-color: rgb(10, 10, 187);
        color: #fff;
        text-decoration: none;
        border-radius: 15px;
        margin: 5px;
    }

    hr {
        display: block; /* Ensures it is a block-level element */
        width: 100%; /* Expands to the full width of the container */
        margin: 10px; /* Resets any default margins */
        align-self: center;
        border: none;
        border-top: 1px solid rgb(144, 121, 121); /* Creates a horizontal line */
    }

    .enterprise {
        display: flex;
        justify-content: space-between;
        margin: inherit;

    }

</style>