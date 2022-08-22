<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-app-bar>
          <v-btn to="/">
            <v-toolbar-title class="pa-2">CRUD Tutorials</v-toolbar-title>
          </v-btn>
          <v-btn to="/tutorials">
            <v-toolbar-item class="pa-2"> List Tutorials </v-toolbar-item>
          </v-btn>
          <v-btn to="/add">
            <v-toolbar-item class="pa-2"> Add New Tutorial </v-toolbar-item>
          </v-btn>
        </v-app-bar>
      </v-card>

      <div class="container mt-3">
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",
};
</script>
