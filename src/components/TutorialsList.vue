<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="grey lighten-5 mt-10">
        <v-row >
          <v-col >
            <v-card class="justify-left" max-width="344" outlined>
              <v-list desabled>
                <v-subheader>Tutorials</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(tutorial, i) in tutorials"
                    :key="i"
                    @click="setActiveTutorial(tutorial, i)"
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
          <v-col>
            <v-card class="mx-auto" max-width="344" elevation="2" shaped>
              <div v-if="currentTutorial">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">Details</div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{ currentTutorial.attributes.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="mb-2">
                      {{currentTutorial.attributes.description}} 
                    </v-list-item-subtitle>
                    <div class="text--primary">
                      Status: {{currentTutorial.attributes.published? "Feito": "Pendente"}}
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <div v-else>
                <p class="ms-10">Please click on a Tutorial...</p>
              </div>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
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
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style scoped>
</style>