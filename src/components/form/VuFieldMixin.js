export default {
  props: {
    id: String,
    name: String,
    type: String,
    focused: {
      type: Boolean,
      default: false,
    },
    disabled: {
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
    size: {
      type: String,
      default: 'lg',
    },
    clear: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      localValue: this.value,
      field: {
        value: null,
        focused: this.$props.focused,
        disabled: this.$props.disabled,
        required: this.$props.required,
        placeholder: this.$props.placeholder,
      }
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
        type: this.$props.type,
        id: this.$props.id,
        name: this.$props.name,
        disabled: this.field.disabled,
        focused: this.field.focused,
        required: this.field.required,
        placeholder: this.field.placeholder,
        readonly: this.$props.readonly,
        maxlength: this.$props.maxlength,
        minLength: this.$props.minLength,
      }
    },
    stateClasses() {
      return {
        'focus': this.field.focused,
        'has-value': !!this.localValue,
        'has-error': this.error,
        'required': this.field.required,
        'disabled': this.field.disabled,
      }
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
    setPlaceholder (value = this.placeholder) {
      this.field.placeholder = value;
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
    onFocus() {
      this.field.focused = true;
    },
    onBlur() {
      this.field.focused = false;
    },
    onChange(event) {
      this.$emit('vu-on-change', event);
    },
    onClickClear(event) {
      this.$emit('vu-clear-click', event);
    },
    onClickLink(event) {
      this.$emit('vu-clear-link', event);
    }
  },
};