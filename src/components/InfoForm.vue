<template>
    <div class="infoform">
        <div style="width: 75%;">
        <div style="display: flex; flex-flow: row; align-items: center; margin-left: 40px">
            <font-awesome-icon icon="caret-left"/>
            <p style="font-size: large; margin-left: 5px;">Retour</p>
        </div>
        <div style="display: block; margin-left: 40px"><font-awesome-icon icon="user" /></div>
        <h2 style="font-size: xx-large; font-weight: 800; margin-left: 20px;">Information Review</h2>
        <p style="font-size: large; font-weight: 500; margin-left: 20px;"> Nulla ac mi sed ipsum ullamcorper condimentum.Fusce eleifend variusi sed ipsum ullamcorper condimentum.Fusce eleifend varius enim, eget feugiat enim lobortis eu.</p>
        <form style="width: 100%;">
            <div class="formrow">
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Rasion Sosiale*</label>
                    <input class="form-input" type="text" required v-model="companyName" placeholder="Company Name">
                </div>
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600;margin-left: 10px">Siret*</label>
                    <input class="form-input" type="text" required v-model="siretID" placeholder="ID Number">
                </div>
            </div>
            <div class="formrow">
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Addresse*</label>
                    <input class="form-input" type="text" required v-model="address" placeholder="Addresse*">
                </div>
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Code Postal*</label>
                    <input class="form-input" type="text" required v-model="postalCode" placeholder="Postal Code*">
                </div>
            </div>
            <div class="formrow">
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Ville*</label>
                    <input class="form-input" type="text" required v-model="ville" placeholder="Ville*">
                </div>
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600;margin-left: 10px">Pays*</label>
                    <input class="form-input" type="text" required v-model="pays" placeholder="Pays*">
                </div>
            </div>
            <div class="formrow">
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Nom*</label>
                    <input class="form-input" type="text" required v-model="lastName" placeholder="Last Name*">
                </div>
                <div class="formunit"  style="display: block;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px;">Pre Nom*</label>
                    <input class="form-input" type="text" required v-model="firstName" placeholder="First Name*">
                </div>
            </div>
            <div class="formrow">
                <div style="display: block; margin: 10px; width: 100%;">
                    <label style="font-size: large; font-weight: 600; margin-left: 10px">Fonction</label>
                    <input class="form-input" type="text" v-model="role" placeholder="Your Role">
                </div>
            </div>
            <button style="width: 20%; height: 50px; background-color: blue; color: white; border-radius: 5px;margin-left: 30px; align: center; border: 1px;" @click="handleSubmit">Continue</button>

            

        </form>
    </div>
    </div>
</template>

<script>

import { useInfoState } from '@/stores/InfoState';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup ( ) {
        const router = useRouter();
        const infoState = useInfoState();

        const companyName = ref (null)
        const siretID = ref (null)
        const address = ref (null)
        const postalCode = ref (null)
        const ville = ref (null)
        const pays = ref (null)
        const lastName = ref (null)
        const firstName = ref (null)
        const role = ref (null)
        const createdDate = ref (null)

        const handleSubmit = () => {
            const enterprise = {
                companyName : companyName.value,
                siretID : siretID.value,
                address : address.value,
                postalCode : postalCode.value,
                ville : ville.value,
                pays : pays.value,
                lastName : lastName.value,
                firstName : firstName.value,
                role : role.value,
                createdDate: new Date
            }
            infoState.addEnterprise(enterprise) 
            console.log(enterprise);
            localStorage.setItem('enterprise', JSON.stringify(enterprise));
            router.push('/registration/docsubmit')
        }
        return {
            companyName,
            siretID,
            address,
            postalCode,
            ville,
            pays,
            lastName,
            firstName,
            role,
            createdDate,
            infoState,
            handleSubmit
        }
    }
}
</script>

<style>

.infoform {
    background-color: whitesmoke;
    display: flex;
    flex-flow: column;
}

.formrow {
    display: flex;
    margin-left: 15px;
}

.formunit {
    margin: 10px;
    width: 50%;
}

</style>