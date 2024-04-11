import { defineStore } from 'pinia';
import ApiBackend from '@/services/ApiBackendService';

const entity = 'user-controller';

export const useUserControllerStore = defineStore({
  id: 'userController',
  state: () => ({
  }),
  actions: {
    create(data) {
        return ApiBackend.post('/user' , data).then(response => {
            return response;
        }).catch(error => {
            return Promise.reject(error);
        })
    }
  }
})
