import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './pages/starter/LandingPage.vue';
import ContactUs from './pages/starter/ContactUs.vue';
import AboutUs from './pages/starter/AboutUs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
