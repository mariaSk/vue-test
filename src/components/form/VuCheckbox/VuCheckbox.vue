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
            >
        </div>
        <div class="vu-checkbox__block">
            <div @click.prevent="toggleCheck" class="vu-checkbox__control">
                <span class="vu-checkbox__icon">
                    <vu-icon icon="check" class="vu-checkbox__icon--icon" v-show="field.checked" />
                </span>
                <label v-if="label"
                       class="vu-checkbox__label text-uppercase"
                       :for="id"
                >{{label}}</label>
            </div>
        </div>
    </div>
</template>

<script>
  import VuUuid from '../../../shared/utils/VuUuid';

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
        model: [String, Number, Boolean, Array, Object],
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
          }
        }
      },
      computed: {
        attributes() {
          const attrs = {
            ...this.$attrs,
            type: this.$props.type,
            id: this.$props.id,
            name: this.$props.name,
            checked: this.field.checked,
            disabled: this.field.disabled,
            required: this.field.required,
          };

          if (this.$options.propsData.hasOwnProperty('value')) {
            if (this.value === null || typeof this.value !== 'object') {
              attrs.value = (this.value === null || this.value === undefined) ? '' : String(this.value)
            }
          }

          return attrs;
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
            return this.model.includes(this.value);
          }

          if (this.hasValue) {
            return this.model === this.value;
          }

          return this.model === true;
        },
        isModelArray () {
          return Array.isArray(this.model);
        },
        hasValue () {
          return this.$options.propsData.hasOwnProperty('value');
        },
      },
      methods: {
        removeItemFromModel (newModel) {
          const index = newModel.indexOf(this.value);

          if (index !== -1) {
            newModel.splice(index, 1);
          }
        },
        handleArrayCheckbox () {
          const newModel = this.model;
          this.field.checked = !this.field.checked;

          if (!this.isSelected) {
            newModel.push(this.value)
          } else {
            this.removeItemFromModel(newModel)
          }

          this.$emit('change', newModel);
        },
        handleSingleSelectCheckbox () {
          this.$emit('change', this.isSelected ? null : this.value);
        },
        handleSimpleCheckbox () {
          this.field.checked = !this.field.checked;
          this.$emit('change', !this.isSelected);
        },
        toggleCheck () {
          if (!this.disabled) {
            if (this.isModelArray) {
              this.handleArrayCheckbox();
            } else if (this.hasValue) {
              this.handleSingleSelectCheckbox();
            } else {
              this.handleSimpleCheckbox();
            }
          }
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
      },
    }
</script>

<style lang="scss" scoped>
    @import "style";
</style>