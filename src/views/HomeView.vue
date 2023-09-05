<script setup>
import { useInterStore } from '../stores/intervention';
import {useTempInterStore} from '../stores/tempinter'
import { ref } from 'vue'
import router from '../router';



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
const store = useTempInterStore()
const defStore = useInterStore()
const isError = ref(false)




// const getClient = () => {
//   event.preventDefault();
//   if(clientid.value != undefined){
//     listClients.value.forEach(element => {
//       if(element.id == clientid.value){
//         clientName.value = element.name
//       }
//     });
//   }else{
//     isError.value = true
//   }
  
// }

const submitForm = () => {
  event.preventDefault();
  if(clientid.value != undefined){
    listClients.value.forEach(element => {
      if(element.id == clientid.value){
        store.setTempInters({
          id: defStore.getTotal,
          clientId: clientid.value,
          client: element.name,
          date: myDate.value,
          observations: obsText.value,
        })
        router.push('/confirm')
      }
    });
  }else{
    isError.value = true
  }
}
</script>

<template>
  <main>

    <div class="form-container">

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

        <button type="submit" class="submit-btn" @click="submitForm">Valider</button>

      </form>

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
