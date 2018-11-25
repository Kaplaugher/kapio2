import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './pages/starter/LandingPage.vue';
import ContactUs from './pages/starter/ContactUs.vue';
import AboutUs from './pages/starter/AboutUs.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: LandingPage,
        header: StarterNavbar,
        footer: StarterFooter
      },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutUs,
        header: StarterNavbar,
        footer: StarterFooter
      },
      props: {
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: ContactUs,
        header: StarterNavbar,
        footer: StarterFooter
      },
      props: {
        footer: { backgroundColor: 'black' }
      }
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
