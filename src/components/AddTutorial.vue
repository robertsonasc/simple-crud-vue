<template>
  <v-container class="grey lighten-5 mt-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="tutorial.title" label="Title" required :counter="15"> </v-text-field>
      <v-text-field v-model="tutorial.description" label="Description" required :counter="30"> </v-text-field>
      <v-checkbox
        v-model="checkbox"
        label="Já foi feito?"
        required
      ></v-checkbox>
      <v-btn
        :disabled="submitted"
        color="success"
        class="mr-4"
        @click="saveTutorial"
      >
        Adicionar Tutorial
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
      checkbox: false
    };
  },
  methods: {
    saveTutorial() {
      this.submitted = true;
      if(this.tutorial.title.toString().trim().length == 0 ||
        this.tutorial.description.toString().trim().length == 0){
        alert("Erro ao adicionar tutorial.");
        location.reload();
        return;
      }
      var data = {
        data: {
          title: this.tutorial.title,
          description: this.tutorial.description,
          published: this.tutorial.published,
        },
      };
      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          alert("Tutorial adicionado com sucesso.");
          location.reload();
        })
        .catch((e) => {
          alert("Erro ao adicionar tutorial.");
          console.log(e);
          location.reload();
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
