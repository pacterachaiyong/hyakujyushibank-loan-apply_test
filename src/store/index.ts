import Vuex from 'vuex';
import { loanStore } from './loanStore'

import { translationStore } from './translation-store';

import createPersistedState from 'vuex-persistedstate'

export function initVueXStore(vue) {
  vue.use(Vuex);
  return new Vuex.Store({
    plugins: [
      createPersistedState({
        storage: window.sessionStorage
      })
    ],
    modules: {
      loanStore: loanStore,
      translationStore,
    }
  });
}

