<template>
    <navbar position="fixed" :transparent="transparent" :color-on-scroll="colorOnScroll" menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
            <router-link class="navbar-brand" to="/">
                KAPtivating Web Solutions
            </router-link>

        </template>
        <template slot="navbar-menu">

            <li class="nav-item">
                <a class="nav-link" href="#pablo">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pablo">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pablo">Contact</a>
            </li>
        </template>
    </navbar>
</template>

<script>
import { NavbarToggleButton, Navbar, NavLink } from '@/components';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    NavbarToggleButton,
    NavLink
  }
};
</script>

<style scoped>
</style>
