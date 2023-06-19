<template>
    <div class="dashboard">
        <div class="card">
            <div class="header">
                <div style="display: flex; flex-flow: column; margin-left: 30px; margin-right: 30px; margin-top: 30px; margin-bottom: 30px;">
                    <h5 style="font-size: 24px;font-weight: 500; margin-left: 10px; margin-bottom: 2px; margin-top: 10px; margin-right: 2px;">My enterprises</h5>
                    <p style="font-size: medium; font-weight: 100; margin-left: 10px; margin-top: 2px; margin-bottom: 2px;">Manage and Access your enterprizes.</p>
                </div>
                <div style="display: flex; align-items: center; margin-right: 30px;">
                    <button class="card-button" @click="goToRegistration"> <img src="../assets/plus.png" alt="tradeInLogo"/> Add New Organization</button>
                </div>
            </div>
            <hr/>
            <div v-if="storedLoginState"  class="enterprise">
                <div style="display: flex; align-items: center; width: 15%; justify-content: center;">
                    <div style="position: relative; display: inline-block; margin-right: 15px;">
                        <img src="../assets/whitecircle.png" alt="tradeInLogo">
                        <img src="../assets/building.png" alt="tradeInLogo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    </div>
                </div>
                <div style="display: flex; flex-flow: column; align-items: flex-start; width: 60%;">
                    <h1 style="font-size: 18px; margin: 2px; font-weight: 500; color: #212121; line-height: 19.12px;">{{  displayName }}</h1>
                    <h5 style="font-size: 14px; margin: 2px; font-weight: 500; line-height: 18px; color: #959595;"> Created at: {{displayDate}} </h5>
                    <h5 style="font-size: 14px; margin: 2px; font-weight: 500; line-height: 18px; color: #959595;"> ID: {{ ID }}</h5>
                </div>
                <div style="display: flex; justify-content: space-evenly; align-items: center;width: 25%;">
                    <button style="border-color:#1D3999; border-width: 1px; border-radius: 8px; height: 39px; width: 84px;">Manage</button>
                    <button style="border-color:#1D3999; border-width: 1px; border-radius: 8px; height: 39px; width: 42px;"><img src="../assets/elipices.png" alt="tradeInLogo"/></button>
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
        box-shadow: 0px 2px 8px 0px #2D3E501F;
        width: 901px;
        height: max-content;
        border-color: black;
        border-width: 2px;
        justify-content: space-between;
        font-family: Avenir, Helvetica, sans-serif;
        /* height: 129px;
        width: 901px;
        left: 269.5px;
        top: 75px;
        border-radius: 8px;
        padding: 24px 49px 24px 49px;
        box-shadow: 0px 2px 8px 0px #2D3E501F;
        margin-top: 20px; */
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .card-button {
        display: inline-block;
        height: 39px;
        width: 206px;
        padding: 6px 12px;
        background-color: #1D3999;
        border-bottom: #1D3999;
        border: 1px;
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        margin: 5px;
    }

    hr {
        display: block; /* Ensures it is a block-level element */
        width: 100%; /* Expands to the full width of the container */
        margin: 2px; /* Resets any default margins */
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