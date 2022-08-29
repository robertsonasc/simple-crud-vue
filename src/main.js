import Vue  from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    colorSnackBar: "undefined",
    snackBar: false,
    text: "",
  },
  mutations: {
    snackBarTrue (state) {
      state.snackBar = true;
    },
    snackBarFalse (state) {
      state.snackBar = false;
    },
    edicaoTextSnack(state){
      state.text = 'Edição realizada com sucesso.';
      state.colorSnackBar = 'green darken-3'
    },
    edicaoErroTextSnack(state){
      state.text = 'Erro ao realizar edição.';
      state.colorSnackBar = 'error'
    },
    remocaoTextSnack(state){
      state.text = 'Remoção realizada com sucesso.';
      state.colorSnackBar = 'green darken-3'
    },
    remocaoErroTextSnack(state){
      state.text = 'Erro ao realizar remoção.';
      state.colorSnackBar = 'error'
    },
    adicaoTextSnack(state){
      state.text = 'Tutorial adicionado com sucesso com sucesso.';
      state.colorSnackBar = 'green darken-3'
    },
    adicaoErroTextSnack(state){
      state.text = 'Erro ao adicionar tutorial.';
      state.colorSnackBar = 'error'
    },
    preenchaTodosTextSnack(state){
      state.text = "Preencha todos os campos."
      state.colorSnackBar = 'error'
    }
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
