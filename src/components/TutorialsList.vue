<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="grey lighten-5 mt-10">
        <v-row>
          <v-col md="4">
            <v-card class="justify-left" max-width="344" outlined>
              <v-list desabled>
                <v-subheader>Tutorials</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(tutorial, i) in tutorials"
                    :key="i"
                    @click="setActiveTutorial(tutorial)"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="tutorial.attributes.title"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card max-width="500" elevation="2" shaped>
              <div v-if="currentTutorial">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">Details</div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{ currentTutorial.attributes.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="mb-2">
                      {{ currentTutorial.attributes.description }}
                    </v-list-item-subtitle>
                    <div class="text--primary">
                      Status:
                      {{
                        currentTutorial.attributes.published
                          ? "Feito"
                          : "Pendente"
                      }}
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    color="warning"
                    rounded
                    :to="'/tutorials/' + currentIndex"
                  >
                    Edit
                  </v-btn>
                  <v-btn
                    class="ms-2"
                    color="error"
                    rounded
                    @click="dialog = true"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </div>
              <div v-else>
                <p class="ms-10">Please click on a Tutorial...</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete this tutorial?
            </v-card-title>
            <v-card-text
              >After deleting, the tutorial will no longer be available.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="removeTutorial(currentIndex)">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      dialog: false,
      selectedItem: null,
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data.data;
          this.tutorials.sort(function(a, b){
            return (a.id - b.id)
          })
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveTutorial(tutorial) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial.id;
    },
    removeTutorial(id) {
      this.dialog = false;
      TutorialDataService.delete(id)
        .then((response) => {
          this.$store.commit('remocaoTextSnack')
          this.$store.commit('snackBarTrue')
          this.selectedItem = null
          console.log(response);
          for (let i = 0; i < this.tutorials.length; i++) {
            if (id === this.tutorials[i].id) {
              this.tutorials.splice(i, 1);
            }
          }
          this.currentTutorial = null;
          this.currentIndex = -1;
        })
        .catch((e) => {
          this.$store.commit('remocaoErroTextSnack')
          this.$store.commit('snackBarTrue')
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>