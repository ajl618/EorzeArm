import { defineStore } from 'pinia';
import ApiCollectService from '@/services/ApiCollectService';

const entity = 'collect-controller';

export const useApiCollectControllerStore = defineStore({
  id: 'CollectController',
  state: () => ({
  }),
  actions: {
    getData(data) 
    {
        return ApiCollectService.get('/' + data).then(response => {
            return response;
        }).catch(error => {
            return Promise.reject(error);
        })
    },
    getItem(data)
    {
      let nombre = data.name;
      let clase = data.clase;

      return ApiCollectService.get('/' + clase + '?name_en_cont=' + nombre).then(response => {
        return response;
    }).catch(error => {
        return Promise.reject(error);
    })
    },
  }
})