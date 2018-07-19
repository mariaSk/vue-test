<template>
    <div>
        <vu-input v-bind:max-length="50" v-bind:required="true" />
    </div>
</template>

<script>
    import VuInput from '../../components/form/VuInput';

    export default {
      name: 'InputTextPage',
      components: {
        VuInput,
      }
    };
</script>