<template>
    <div id="app">
        <MainNav :colorOnScroll="1" />
        <div>
            <router-view />
        </div>
        <MainFooter />
    </div>
</template>
<script>
import MainNav from './layout/StarterNavbar';
import MainFooter from './layout/StarterFooter';
export default {
  components: {
    MainNav,
    MainFooter
  }
};
</script>

