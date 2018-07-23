<template>
    <div
        class="vu-checkbox"
        :class="[stateClasses, size, styleClass]"
    >
        <div class="vu-helper-hidden-accessible">
            <input
                class="vu-text-input__input"
                v-model="model"
                :checked="checked"
                v-bind="attributes"
                v-on="listeners"
                @change="toggleCheck"
            >
        </div>
        <div class="vu-checkbox__block">
            <div @click.prevent="toggleCheck" class="vu-checkbox__control">
                <span class="vu-checkbox__icon"></span>
                <label v-if="label"
                       class="vu-checkbox__label text-uppercase"
                       :for="id"
                >{{label}}</label>
            </div>
        </div>
    </div>
</template>

<script>
  import VuUuid from '../../shared/utils/VuUuid';

    export default {
      name: 'VuCheckbox',
      props: {
        id: {
          type: String,
          default: () => 'vu-checkbox-' + VuUuid(),
        },
        type: {
          type: String,
          default: 'checkbox',
        },
        checked: {
          type: Boolean,
          default: false,
        },
        name: String,
        disabled: {
          type: Boolean,
          default: false,
        },
        model: [Boolean, Array],
        value: {
          type: [String, Boolean, Object, Number],
        },
        error: {
          type: Boolean,
          default: false,
        },
        required: {
          type: Boolean,
          default: false,
        },
        label: String,
        labelClass: String,
        size: {
          type: String,
          default: 'lg',
        },
        styleClass: {
          type: String,
          default: 'teal',
        },
      },
      model: {
        prop: 'model',
        event: 'change'
      },
      data() {
        return {
          field: {
            checked: this.$props.checked,
            disabled: this.$props.disabled,
            required: this.$props.required,
            value: this.$props.value,
          }
        }
      },
      computed: {
        attributes() {
          return {
            ...this.$attrs,
            type: this.$props.type,
            id: this.$props.id,
            name: this.$props.name,
            checked: this.field.checked,
            disabled: this.field.disabled,
            required: this.field.required,
            value: this.field.value,
          }
        },
        stateClasses() {
          return {
            'has-value': this.field.checked,
            'has-error': this.error,
            'required': this.field.required,
            'disabled': this.field.disabled,
          }
        },
        isSelected () {
          if (this.isModelArray) {
            return this.model.includes(this.value)
          }

          if (this.hasValue) {
            return this.model === this.value
          }

          return this.model === this.trueValue
        },
        isModelArray () {
          return Array.isArray(this.model)
        },
        hasValue () {
          return this.$options.propsData.hasOwnProperty('value')
        },
      },
      watch: {
        model () {
          this.setValue();
        },
        localValue (val) {
          this.$emit('input', val);
        },
        value (val) {
          this.localValue = val;
        }
      },
      methods: {
        setValue () {
          this.field.value = this.model;
        },
        setDisabled () {
          this.field.disabled = true;
        },
        removeDisabled () {
          this.field.disabled = false;
        },
        setRequired () {
          this.field.required = true;
        },
        removeRequired () {
          this.field.required = false;
        },
        onChange(event) {
          this.$emit('vu-on-change', event);
        },
        toggleCheck() {
          if(this.disabled) {
            return;
          }

          this.field.checked = !this.field.checked;
          //this.updateModel();
        },
      },
    }
</script>



<!--<script>

  import VuUuid from '../../shared/utils/VuUuid';

  export default {
    name: 'VuCheckbox',
    props: {
      id: {
        type: String,
        default: () => 'vu-checkbox-' + VuUuid(),
      },
      type: {
        type: String,
        default: 'checkbox',
      },
      checked: {
        type: Boolean,
        default: false,
      },
      //model: [String, Boolean, Object, Number, Array],
    },
    model: {
      prop: 'model',
      event: 'change'
    },
    data() {
      return {
        field: {
          checked: this.$props.checked,
        }
      }
    },
    computed: {
      attributes() {
        return {
          checked: this.field.checked,
        }
      },
      listeners () {
        let l = {...this.$listeners};
        delete l.input;
        return l;
      },
      stateClasses() {
        return {
          'has-value': this.field.checked,
        }
      },
      isModelArray () {
        return Array.isArray(this.model)
      },
    },
    methods: {
      toggleCheck() {
        if(this.disabled) {
          return;
        }

        this.field.checked = !this.field.checked;
        //this.updateModel();
      },
      updateModel() {

      },
    }
  };
</script>-->

<style lang="scss" scoped>
    @import "../../shared/styles/mixins";

    .vu-helper-hidden-accessible {
        position: absolute;
        margin: -1px;
        border: 0;
        width: 1px;
        height: 1px;
        padding: 0;
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    .vu-checkbox {
        position: relative;
        vertical-align: middle;
        cursor: pointer;

        &__block {
            vertical-align: middle;
            line-height: 22px;
            cursor: pointer;
        }

        &__icon {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            width: 14px;
            height: 14px;
            border-radius: 3px;
            border: 1px solid $blueGrey-400;
            background: $white;
        }

        &__label {
            display: inline-block;
            margin-right: 20px;
            @include font(10px, $baseFont, $blueGrey-700, 1.2, 500, normal, 0.56px);
            cursor: pointer;
        }

        &.has-value {
            .vu-checkbox__icon {
                &:before {
                    content: '\f00c';
                    display: block;
                    position: relative;
                    top: -1px;
                    @include font(10px, FontAwesome, $white);
                    text-align: center;
                }
            }

            &.cyan {
                .vu-checkbox__icon {
                    border-color: $cyan-600;
                    background: $cyan-600;
                }
            }

            &.green {
                .vu-checkbox__icon {
                    border-color: $green-600;
                    background: $green-600;
                }
            }

            &.light-blue {
                .vu-checkbox__icon {
                    border-color: $lightBlue-600;
                    background: $lightBlue-600;
                }
            }

            &.teal {
                .vu-checkbox__icon {
                    border-color: $teal-600;
                    background: $teal-600;
                }
            }
        }

        &.disabled {
            .vu-checkbox__block {
                cursor: default;
            }

            .vu-checkbox__icon {
                border-color: $blueGrey-100;
                background: $blueGrey-100;
            }

            .vu-checkbox__label {
                color: $blueGrey-400;
                cursor: default;
            }
        }
    }

    .vu-checkbox-group__label {
        margin-right: 15px;
        @include font(14px, $baseFont, $blueGrey-900, $weight: 500);
    }
</style>