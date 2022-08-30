import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      colorSnackBar: "undefined",
      snackBar: false,
      text: "",
      timeout: 2499,
    },
    mutations: {
      snackBarTrue (state) {
        state.snackBar = true;
        if(state.timeout === 2499){
          state.timeout = 2500
        }else{
          state.timeout = 2499
        }
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