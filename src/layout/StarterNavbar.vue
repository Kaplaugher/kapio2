<template>
    <navbar position="fixed" :transparent="transparent" :color-on-scroll="colorOnScroll" menu-classes="ml-auto" type="primary">
        <template slot-scope="{toggle, isToggled}">
            <router-link class="navbar-brand" to="/">
                KAPtivating Web Solutions
            </router-link>

        </template>
        <template slot="navbar-menu">

            <li class="nav-item">
                <router-link tag="li" to="/about">
                    <a class="nav-link">About</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link tag="li" to="/contact">
                    <a class="nav-link">Contact</a>
                </router-link>
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
