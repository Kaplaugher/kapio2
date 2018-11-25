<template>
    <footer class="footer" :class="{[`footer-${type}`]: type}" :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
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
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}} kaptivating.io
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
