<template>
  <v-container class="grey lighten-5 mt-10">
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="tutorial.title" label="Title" required :counter="20" maxlength="20" > </v-text-field>
      <v-text-field v-model="tutorial.description" label="Description" required :counter="80" maxlength="80"> </v-text-field>
      <v-checkbox
        v-model="checkbox"
        label="Já foi feito?"
        required
      ></v-checkbox>
      <v-btn
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
      checkbox: false
    };
  },
  methods: {
    saveTutorial() {
      if(this.tutorial.title.toString().trim().length == 0 ||
        this.tutorial.description.toString().trim().length == 0){
        alert("Erro ao adicionar tutorial.");
        this.newTutorial();
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
          this.newTutorial();
        })
        .catch((e) => {
          alert("Erro ao adicionar tutorial.");
          console.log(e);
          this.newTutorial();
        });
    },

    newTutorial() {
      this.tutorial.title = "";
      this.tutorial.description = "";
      this.tutorial.published = false;
      this.checkbox = false;
    },
  },
};
</script>
