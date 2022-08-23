<template>
  <div id="app">
    <v-app id="inspire">
        <v-app-bar absolute dense>
          <v-toolbar-title>CRUD Tutorials</v-toolbar-title>

          <v-btn class="ms-2" to="/tutorials">
            <v-toolbar-item>List Tutorials</v-toolbar-item>
          </v-btn>

          <v-btn to="/add">
            <v-toolbar-item>Add New Tutorial</v-toolbar-item>
          </v-btn>
        </v-app-bar>
     
      <div class="container mt-3">
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
