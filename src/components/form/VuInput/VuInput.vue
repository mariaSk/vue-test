<template>
    <div class="vu-text-input" :class="[stateClasses, size]">
        <label v-show="!!label" class="vu-text-input__label">{{ label }}</label>
        <div class="vu-text-input__control">
            <input
                class="vu-text-input__input"
                v-model="model"
                v-bind="attributes"
                v-on="listeners"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
            >
            <div class="vu-text-input__buttons">
                <button
                    class="vu-text-input__button vu-text-input__button-link"
                    v-if="link"
                    @click="onClickLink"
                >
                    <vu-icon icon='link' size="sm"></vu-icon>
                </button>
                <button
                    class="vu-text-input__button vu-text-input__button-clear"
                    v-if="clear"
                    @click="onClickClear"
                >
                    <vu-icon icon='times' size="sm"></vu-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import VuFieldMixin from '../VuFieldMixin';
    import VuUuid from '../../../shared/utils/VuUuid';

    export default {
      name: 'VuInput',
      mixins: [VuFieldMixin],
      props: {
        id: {
          type: String,
          default: () => 'vu-input-' + VuUuid(),
        },
        type: {
          type: String,
          default: 'text',
        },
      },
      computed: {
        listeners () {
          let l = {...this.$listeners};
          delete l.input;
          return l;
        }
      },
    };
</script>

<style lang="scss" scoped>
    @import "style";
</style>