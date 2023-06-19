<template>
     <div class="infoform">
        <div style="width: 75%;">
            <div style="display: flex; flex-flow: row; align-items: center; margin-left: 40px">
                <img src="../assets/backcaret.png" alt="tradeInLogo"/>
                <p style="font-size: 14px; margin-left: 5px; font-family: Helvetica, sans-serif;">Retour</p>
            </div>
            <div style="display:block; solid #000;; flex-flow: row; margin-left: 40px; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <div style="position: relative; display: inline-block; margin-right: 5px;">
                        <img src="../assets/whitecircle.png" alt="tradeInLogo" width="40px" height="40px">
                        <img src="../assets/files.png" alt="tradeInLogo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    </div>
                    <h2 style="font-size: 24px; font-weight: 600; margin-left: 20px;"> Upload Documents</h2>
                </div>
                <p style="font-size: large; font-weight: 500; margin-left: 20px; text-align: left; color: #959595;"> With this information, we confirm your identity and anlyze your customers in order to issue your price offer.</p>
            </div>
            <div class="card2">
                <h3 style="display: block; text-align: left; margin: 10px; margin-left: 25px;"> Document Upload</h3>
                <hr />
                <div class="docfield">
                    <div class="unitdoc">
                        <img src="../assets/docs.png" alt="tradeInLogo"/>
                        <h5 style="text-align: center; font-size: medium; margin: 3px;">Upload Your KBIS</h5>
                        <p style="text-align: center; font-size: small;">Drop your document, or browse</p>
                    </div>
                    <div class="unitdoc">
                        <img src="../assets/docs.png" alt="tradeInLogo"/>
                        <h5 style="text-align: center; font-size: medium; margin: 3px;">Upload Your ID</h5>
                        <p style="text-align: center; font-size: small;">Drop your document, or browse</p>
                    </div>
                    <div class="unitdoc">
                        <img src="../assets/docs.png" alt="tradeInLogo"/>
                        <h5 style="text-align: center; font-size: medium; margin: 3px;">Upload Your RIB</h5>
                        <p style="text-align: center; font-size: small;">Drop your document, or browse</p>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <button style="width: 112px; height: 39px; background-color: #1D3999; color: white; border-radius: 5px;margin-left: 30px; align: center; border: 1px;" @click="handleSubmit">Continue</button>
                <span style="font-size: 14px; font-family: Helvetica, sans-serif;" @click="handleSubmit">Skip for now <img src="../assets/caretright.png" alt="tradeInLogo"/></span>
            </div>
        </div>
    </div>
</template>

<script>

import { useRouter } from 'vue-router';

const router = useRouter();
export default {
    setup () {
        const router = useRouter();

        const handleSubmit = () => {
            router.push('/dashboard')
        }
        return {
            handleSubmit
        }
    },
    
    components:{

    },
}

</script>

<style>

    .docfield {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: center;
        margin: 5px;
        font-family: Helvetica, sans-serif;
    }

    .unitdoc {

        border: 2px dashed black;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        width: 30%;
        border-color: #BEBEBE;
        background-color: #F6F8FB;
        font-family: Helvetica, sans-serif;

    }

    .card2 {
        display: flex;
        flex-flow: column;
        margin: 20px;
        background-color:white;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(1, 1, 1, 1);
        width: 100%;
        height: max-content;
        border-color: black;
        border-width: 2px;
        justify-content: space-between;
        font-family: Helvetica, sans-serif;
    }



</style>