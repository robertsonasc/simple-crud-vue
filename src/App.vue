<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar absolute>
        <v-toolbar-title>CRUD Tutorials</v-toolbar-title>

        <v-toolbar-items class="ms-5">
          <v-btn text to="/tutorials"> List Tutorials </v-btn>
          <v-btn text to="/add"> Add New Tutorial </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <div class="container mt-3">
        <router-view />
      </div>
      <v-snackbar
        v-model="$store.state.snackBar"
        multi-line
        :color="$store.state.colorSnackBar"
        :timeout="$store.state.timeout"
      >
        {{ $store.state.text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="$store.commit('snackBarFalse')"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
