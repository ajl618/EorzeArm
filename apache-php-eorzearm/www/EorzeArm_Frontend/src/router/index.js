import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: () => import('../views/RegistrarseView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardPage.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

/**
 * Esta función se ejecuta cada vez que se navega a una nueva ruta.
 * Se utiliza para verificar si la ruta requiere autenticación y si el usuario está autenticado.
 * Si la ruta requiere autenticación y el usuario no está autenticado, redirige al usuario a la página de inicio.
 * De lo contrario, permite al usuario continuar con la ruta prevista.
 */
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('auth_token');  // Aquí verifica si el usuario está autenticado

  if (requiresAuth && !isAuthenticated) {
    next('/');  // Redirige al usuario a la página principal si no está autenticado
  } else {
    next();  // De lo contrario, sigue con la ruta prevista
  }
});

export default router
