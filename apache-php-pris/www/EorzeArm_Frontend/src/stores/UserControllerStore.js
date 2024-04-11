import { defineStore } from 'pinia';
import ApiBackend from '@/services/ApiBackendService';

const entity = 'user-controller';

export const useUserControllerStore = defineStore({
  id: 'userController',
  state: () => ({
  }),
  actions: {
    create(data) 
    {
        return ApiBackend.post('/registrar' , data).then(response => {
            return response;
        }).catch(error => {
            return Promise.reject(error);
        })
    },
    user(){
      return ApiBackend.get('/user').then(response => {
        console.log(response);
        return response;
    }).catch(error => {
        return Promise.reject(error);
    })
    },
  }
})
