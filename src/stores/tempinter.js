import { defineStore } from "pinia";


export const useTempInterStore = defineStore('tempinters', {
    state: () => {
        return{
            tempinters : [],
        }
    },

    actions: {
        setTempInters(inter){
            this.tempinters = inter
        },
        destroyTempInters(){
            this.tempinters = {}
        },
        removeTempInters(inter){
            this.tempinters.splice(inter, 1);
        },
    },
    getters: {
        getTempInters() {
          return this.tempinters
        },
        getTempInterTotal(){
            return this.tempinters.length
        }
      },
})