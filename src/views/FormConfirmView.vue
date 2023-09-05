<script setup>
import {ref} from 'vue'
import router from '../router';
import {useTempInterStore} from '../stores/tempinter'
import { useInterStore } from '../stores/intervention';

const store = useInterStore()
const tempstore = useTempInterStore()
const isCorrect = ref(false)
const notChecked = ref(false)

const submitForm = () =>{
  event.preventDefault();
  if(isCorrect.value){
    store.addInter({
    id: store.getTotal,
    clientId: tempstore.getTempInters.clientId,
    client: tempstore.getTempInters.client,
    date: tempstore.getTempInters.date,
    observations: tempstore.getTempInters.observations,
  })
  router.push('/liste')
  }else{
    notChecked.value = true
  }

}
</script>


<template>
    <div class="container">
        <div class="recap-container">
        <h1>Récapitulatif</h1>

<p>Nom de l'entreprise/client</p>

<p class="recap-answer">{{ tempstore.getTempInters.client }}</p>

<p>Date de passage</p>

<p class="recap-answer">{{ tempstore.getTempInters.date }}</p>

<p>Observations</p>

<p class="recap-answer">{{ tempstore.getTempInters.observations != '' ? tempstore.getTempInters.observations : 'Aucune observation' }}</p>

<div class="checkbox-container">
  <input type="checkbox" id="iscorrect" v-model="isCorrect" required>
  <label for="iscorrect">Je confirme que les informations sont correctes</label>
</div>
<p class="error" v-if="notChecked">Vous devez confirmer votre choix !</p>

<div class="double-sub">
  <button type="submit" class="submit-btn" @click="getClient">Annuler</button>
  <button type="submit" class="submit-btn" @click="submitForm">Valider</button>
</div>
        
    </div>
    
    </div>
    
    
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
.recap-container{
    display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #3D3D33;
  width: 50%;
  margin: 80px;
  border-radius: 50px;
  padding: 30px;
    align-items: center;
  color: white;
    .checkbox-container{
    display: flex;
    flex-direction: row;
  }
  .recap-answer{
    background-color: #2C2C24;
    width: 60%;
    padding: 10px;
    border: 2px black solid;
    border-radius: 25px;
    padding: 10px;
    color: rgb(230, 122, 122);
    font-weight: bold;
  }
 

  .double-sub{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .submit-btn{
      cursor: pointer;
      background-color: #2C2C24;
      color: white;
      width: 60%;
      margin-top: 30px;
      margin-left: 30px;
      height: 80px;
      background-color: #2C2C24;
      border: 2px black solid;
      color: white;
      border-radius: 25px;
      font-size: large;
      &:hover{
        background-color: #20201a;

      }
    }
  }
}
.error{
    color: red;
}
}


@media screen and (max-width: 500px) {
    .container .recap-container {
    width: 100%;
    margin: 20px;
    padding: 10px;
    display: flex;
    
    form{
      margin-left: 0;
      .submit-btn{
      width: 80%;
      margin-left: 5%;
      margin-bottom: 30px;
    }
}
    .double-sub {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
        .submit-btn{
        width: 60%;
        margin: 10px;
    }
    }
}
}

</style>