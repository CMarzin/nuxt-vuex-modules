import Vuex from 'vuex';
import apiModule from './modules/api-logic';
import appModule from './modules/app-logic';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      appLogic: appModule,
      api: apiModule,
    }
  });
};

export default createStore