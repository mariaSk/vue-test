<template>
  <div id="app">
    <main-header/>
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <main-nav-bar />
          </div>
          <div class="col-10">
            <div class="main-container">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from './template/MainHeader';
import MainNavBar from './template/MainNavBar';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainNavBar,
  },
}
</script>

<style lang="scss">
  @import "shared/styles/reset";
  @import "shared/styles/global";

  .wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }

  .main-container {
    padding: 20px 15px;
  }
</style>
