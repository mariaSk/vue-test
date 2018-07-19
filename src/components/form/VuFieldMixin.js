export default {
  props: {
    id: String,
    name: String,
    type: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    focused: {
      type: Boolean,
      default: false,
    },
    value: {},
    placeholder: String,
    error: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
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
        disabled: this.disabled,
        focused: this.focused,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength,
        minLength: this.minLength,
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
    },
    onChange() {

    },
    onClickClear() {
      this.model = '';
    },
    onClickLink() {

    }
  }
};