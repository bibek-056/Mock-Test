import { defineStore } from "pinia";

export const useInfoState = defineStore('infoState', {
    state: () => ({
        enterprises: [
            {
                companyName: "",
                siretID: "",
                address: "",
                postalCode: "",
                ville:"",
                pays: "",
                lastName: "",
                firstName: "",
                role: "",
                timeStamp: ""
            }
            
        ]
    }),
    
    actions: {
        addEnterprise(enterprise) {
            this.enterprises.push(enterprise)
        }
    }
})