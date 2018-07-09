<template>
    <div class="header">
        <div class="header__inner container">
            <h1>Vue Library</h1>
            <main-nav/>
        </div>
    </div>
</template>

<script>
import MainNav from './MainNav';

export default {
  name: 'MainHeader',
  components: {
    MainNav,
  },
};
</script>

<style lang="scss" scoped>
    @import "../shared/styles/mixins";

    .header {
        position: relative;
        height: 52px;
        background: $blueGrey-900;
        color: $white;

        &__inner {
            display: flex;
            align-items: center;
            height: 100%;

            h1 {
                @include RubikMedium();
                display: inline-block;
                vertical-align: middle;
                font-size: 22px;
                text-transform: uppercase;
            }
        }
    }
</style>