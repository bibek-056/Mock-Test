<template>
     <div class="infoform">
        <div style="width: 75%;">
            <div style="display: flex; flex-flow: row; align-items: center; margin-left: 40px">
                <font-awesome-icon icon="caret-left"/>
                <p style="font-size: large; margin-left: 5px;">Retour</p>
            </div>
            <div style="display:block; solid #000;; flex-flow: row; margin-left: 40px; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <font-awesome-icon icon="user" />
                    <h2 style="font-size: xx-large; font-weight: 800; margin-left: 20px;"> Upload Documents</h2>
                </div>
                <p style="font-size: large; font-weight: 500; margin-left: 20px; text-align: left;"> With this information, we confirm your identity and anlyze your customers in order to issue your price offer.</p>
            </div>
            <div class="card2">
                <h3 style="display: block; text-align: left; margin: 10px; margin-left: 25px;"> Document Upload</h3>
                <hr />
                <div class="docfield">
                    <div class="unitdoc">
                        <font-awesome-icon icon="folder" />
                        <h5 style="text-align: center; font-size: large;">Upload Your KBIS</h5>
                        <p style="text-align: center; font-size: medium;">Drop your document, or browse</p>
                    </div>
                    <div class="unitdoc">
                        <font-awesome-icon icon="folder" />
                        <h5 style="text-align: center; font-size: large;">Upload Your ID</h5>
                        <p style="text-align: center; font-size: medium;">Drop your document, or browse</p>
                    </div>
                    <div class="unitdoc">
                        <font-awesome-icon icon="folder" />
                        <h5 style="text-align: center; font-size: large;">Upload Your RIB</h5>
                        <p style="text-align: center; font-size: medium;">Drop your document, or browse</p>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <button style="width: 20%; height: 50px; background-color: blue; color: white; border-radius: 5px;margin-left: 30px; align: center; border: 1px;" @click="handleSubmit">Continue</button>
                <span style="font-size: large;" @click="handleSubmit">Skip for now <font-awesome-icon icon="caret-right"/></span>
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
        justify-content: space-evenly;
        align-items: center;
        align-self: center;
        margin: 5px;
    }

    .unitdoc {

        border: 2px dotted black;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        margin: 5px;
        width: 30%;
        background-color: rgb(171, 220, 238);

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
    }



</style>