<template>
  <v-container class="grey lighten-5 mt-10">
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="currentTutorial.attributes.title" label="Title" required :counter="20" maxlength="20" > {{currentTutorial.title}} </v-text-field>
      <v-text-field v-model="currentTutorial.attributes.description" label="Description" required :counter="80" maxlength="80"> </v-text-field>
      <v-checkbox
        v-model="currentTutorial.attributes.published"
        label="Já foi feito?"
        required
      ></v-checkbox>
      <v-btn
        color="success"
        class="mr-4"
        @click="updateTutorial"
      >
        Confirmar Edição
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import router from "../router";
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data.data;
          console.log(this.currentTutorial);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTutorial() {
      var data = {
        data: {
          title: this.currentTutorial.attributes.title,
          description: this.currentTutorial.attributes.description,
          published: this.currentTutorial.attributes.published
        }
      }
      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          console.log(response.data);
          alert("Tutorial editado com sucesso.");
          router.back();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getTutorial(this.$route.params.id);
  }
};
</script>
