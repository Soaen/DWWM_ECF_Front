<script setup>
import {useInterStore} from '../stores/intervention'
import { ref } from 'vue'

const listClients = ref([
  {
    id: 0,
    type: 1,
    name: `Jardins d'Ariana`,
  },
  {
    id: 1,
    type: 2,
    name: `Jérôme Livran`,
  },
  {
    id: 2,
    type: 2,
    name: `Philippe Parguey`,
  },
  {
    id: 3,
    type: 1,
    name: `Archimed`,
  },
  {
    id: 4,
    type: 1,
    name: `BeCom`,
  },
])

const myDate = ref(new Date().toISOString().slice(0,10))
const clientid = ref()
const obsText = ref('')
const store = useInterStore()
const isNotSubmit = ref(true)
const clientName = ref()
const isCorrect = ref(false)
const isError = ref(false)
const notChecked = ref(false)

const submitForm = () =>{
  event.preventDefault();
  if(isCorrect.value){
    store.addInter({
    id: store.getTotal,
    clientId: clientid.value,
    date: myDate.value,
    observations: obsText.value
  })
  console.log(store.getInters);
  }else{
    notChecked.value = true
  }

}

const getClient = () => {
  event.preventDefault();
  if(clientid.value != undefined){
    listClients.value.forEach(element => {
      if(element.id == clientid.value){
        clientName.value = element.name
      }
    });
    isNotSubmit.value = !isNotSubmit
  }else{
    isError.value = true
  }
  
}

</script>

<template>
  <main>

    <div class="form-container" v-if="isNotSubmit">

      <h1>Avis de passage</h1>

      <form action="" method="post">

        <label for="name">Nom de l'entreprise/client <span class="required">*</span></label>

        <select name="name" id="name" v-model="clientid" required>
          <option :value="client.id" v-for="client in listClients">{{client.name}}</option>
        </select>

        <p v-if="isError" class="error">Vous devez choisir un client !</p>

        <label for="date">Date de passage <span class="required">*</span></label>

        <input type="date" v-model='myDate' required>

        <label for="date" class="date">Observations</label>

        <textarea name="date" id="date" cols="30" rows="10" v-model="obsText"></textarea>

        <button type="submit" class="submit-btn" @click="getClient">Valider</button>

      </form>

    </div> 

  <div v-else class="form-container">

        <h1>Récapitulatif</h1>

        <p>Nom de l'entreprise/client</p>

        <p class="recap-answer">{{ clientName }}</p>

        <p>Date de passage</p>

        <p class="recap-answer">{{ myDate }}</p>

        <p>Observations</p>

        <p class="recap-answer">{{ obsText != '' ? obsText : 'Aucune observation' }}</p>

        <div class="checkbox-container">
          <input type="checkbox" id="iscorrect" v-model="isCorrect" required>
          <label for="iscorrect">Je confirme que les informations sont correctes</label>
        </div>
        <p class="error" v-if="notChecked">Vous devez confirmer votre choix !</p>

        <div class="double-sub">
          <button type="submit" class="submit-btn" @click="getClient">Annuler</button>
          <RouterLink to="/liste"><button type="submit" class="submit-btn" @click="submitForm">Valider</button></RouterLink>
        </div>



      </div>
  </main>
</template>

<style scoped lang="scss">
main{
  display: flex;
  justify-content: center;
}
*{
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
}
.error{
      color: red;
    }
.form-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #3D3D33;
  width: 50%;
  margin: 80px;
  border-radius: 50px;
  padding: 30px;
  color: white;
  .double-sub{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .submit-btn{
      cursor: pointer;
      background-color: #2C2C24;
      color: white;
      width: 40%;
      margin-top: 30px;
      margin-left: 30px;
      height: 80px;
      background-color: #2C2C24;
      border: 2px black solid;
      color: white;
      border-radius: 25px;
      font-size: large;
    }
  }
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
  h1{
    color: white;
    margin-bottom: 10px;
    text-align: center;

  }
  .required{
    color: red;
  }
  form{
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    
    label{
      margin-bottom: 20px;
      margin-top: 20px;
    }
    select, input, textarea{
      width: 60%;
      
    }
    select, input{
      background-color: #2C2C24;
      border: 2px black solid;
      border-radius: 25px;
      color:  white;
      padding: 10px;
    }
    textarea{
      margin-bottom: 40px;
      background-color: #2C2C24;
      border: 2px black solid;
      border-radius: 25px;
      padding: 10px;
      color: white;
    }
    .submit-btn{
      width: 40%;
      height: 80px;
      background-color: #2C2C24;
      border: 2px black solid;
      color: white;
      border-radius: 25px;
      font-size: large;
      cursor: pointer;
    }
  }
}
a{
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 500px) {
  .form-container {
    width: 100%;
    margin: 10px;
    margin-top: 50px;
    padding: 0;
    form{
      margin-left: 0;
      .submit-btn{
      width: 80%;
      margin-left: 5%;
      margin-bottom: 30px;
    }
    }
  }
}

</style>
