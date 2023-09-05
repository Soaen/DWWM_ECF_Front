import { defineStore } from "pinia";


export const useInterStore = defineStore('inter', {
    state: () => {
        return{
            inters : [],
        }
    },

    actions: {
        addInter(inter){
            this.inters.push(inter)  
        },
        setInter(inter){
            this.inters = inter
        },
        destroyInter(){
            this.inters = {}
        },
        removeInter(inter){
            this.inters.splice(inter, 1);
        },
    },
    getters: {
        getInters() {
          return this.inters
        },
        getTotal(){
            return this.inters.length
        }
      },
})