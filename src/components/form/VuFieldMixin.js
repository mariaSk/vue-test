export default {
  props: {
    value: {},
    name: String,
    class: String,
    placeholder: String,
    error: Boolean,
    disabled: Boolean,
    focused: Boolean,
    readonly: Boolean,
    required: Boolean,
    maxLength: Number,
    minLength: Number,
    label: String,
    labelClass: String,
  },
  data() {
    return {
      localValue: this.value,
    }
  },
  computed: {
    model: {
      get() {
        return this.localValue;
      },
      set(value) {
        this.localValue = value;
      }
    },
    attributes() {
      return {
        ...this.$attrs,
        type: this.type,
        id: this.id,
        name: this.name,
        class: this.class,
        error: this.error,
        disabled: this.disabled,
        focused: this.focused,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength,
        minLength: this.minLength,
        label: this.label,
        labelClass: this.labelClass,
      }
    },
    stateClasses() {
      return {
        'focus': this.focused,
        'has-value': !!this.localValue,
        'has-error': this.error,
        'required': this.required,
        'disabled': this.disabled,
      }
    }
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  }
};