<template>
    <nav class="main-nav navbar navbar-dark">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="item of nav">
                <router-link class="nav-link" v-bind:to="item.href" >{{ item.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  import nav from '../data/nav';

  export default {
    name: 'MainNav',
    data() {
      return {
        nav,
      }
    },
  };
</script>

<style lang="scss" scoped>
    .main-nav {
        transition: .3s ease-in;
        transition-property: top;

        a {
            font-size: 14px;
            line-height: 2em;
        }
    }
</style>