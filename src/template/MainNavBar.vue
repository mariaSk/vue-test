<template>
    <nav class="main-navbar navbar flex-column align-items-start navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="item of navbar">
                <router-link class="nav-link" v-bind:to="item.href" >{{ item.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import navbar from '../data/navbar';

export default {
    name: 'MainNavBar',
    data() {
      return {
        navbar: navbar,
      }
    },
};
</script>

<style lang="scss" scoped>
.main-navbar {
    transition: .3s ease-in;
    transition-property: top;

    a {
        display: block;
        font-size: 14px;
        line-height: 2em;

        &.router-link-exact-active {
            color: rgba(0, 0, 0, 0.7);
        }
    }
}
</style>