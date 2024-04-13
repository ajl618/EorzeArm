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
  }
})
