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
    import VuFieldMixin from './VuFieldMixin';
    import VuUuid from '../../shared/utils/VuUuid';

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
@mixin hasError() {
    .vu-text-input__control {
        background-color: #ffebee;
    }

    .vu-text-input__label {
        color: #d32f2f;
    }

    .vu-text-input__placeholder {
        color: #d32f2f;
    }
}

.vu-text-input {
    display: flex;
    align-items: center;

    &__label {
        margin-right: 15px;
        text-transform: uppercase;
        font-size: 10px;
        color: #009688;
        font-weight: 500;
    }

    &__control {
        position: relative;
        flex-grow: 1;
        border: 1px solid #cfd8dc;
        border-radius: 3px;
        box-shadow: inset 0 1px 3px 0 rgba(38,50,56,0.31);
        background-color: #fff;
        transition: background-color 0.2s;
    }

    &__input {
        width: 100%;
        border: none;
        padding: 4px 12px 0;
        background: none;
        outline: none !important;
        box-sizing: border-box;
        text-overflow: ellipsis;
        font-size: 13px;
        color: #37474f;
        transition: border-color 0.2s;
    }

    &__placeholder {
        position: absolute;
        pointer-events: none;
        left: 0px;
        top: 50%;
        width: 100%;
        padding: 0 12px;
        transform: translateY(-50%);
        text-transform: uppercase;
        font-size: 10px;
        color: #009688;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: opacity 0.2s, color 0.2s, border-color 0.2s, font-size 0.2s, top 0.2s, transform 0.2s, padding 0.2s;
    }

    &__hint {
        position: absolute;
        z-index: 1;
        width: 300px;
        border: 1px solid transparentize(#cfd8dc, 0.41);
        padding: 9px 10px;
        box-shadow: 0 3px 10px 0 rgba(52, 73, 94, 0.16);
        border-radius: 2px;
        background-color: #fff;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s;

        &:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #fff;
            transform: rotate(45deg);
            transform-origin: 50%;
        }

        &__inner {
            word-wrap: break-word;
            font-size: 13px;
            color: #37474f;
        }

        &.right {
            left: 50%;
            margin-left: -27px;

            &:before {
                left: 25px;
            }
        }

        &.left {
            right: 50%;
            margin-right: -27px;

            &:before {
                right: 25px;
            }
        }

        &.top {
            bottom: 100%;
            margin-bottom: -1px;

            &:before {
                bottom: -5px;
                border-right: 1px solid transparentize(#cfd8dc, 0.41);
                border-bottom: 1px solid transparentize(#cfd8dc, 0.41);
            }
        }

        &.bottom {
            top: 100%;
            margin-top: -1px;

            &:before {
                top: -5px;
                border-left: 1px solid transparentize(#cfd8dc, 0.41);
                border-top: 1px solid transparentize(#cfd8dc, 0.41);
            }
        }
    }

    &__control:hover {
        .vu-text-input__hint {
            opacity: 1;
            visibility: visible;
        }
    }

    &__buttons {
        position: absolute;
        top: 7px;
        right: 4px;
        height: 24px;
    }

    &__button {
        vertical-align: middle;
        width: 24px;
        height: 24px;
        border: none;
        outline: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        font-size: 12px;
        color: #78909c;

        &-clear {
            &:hover {
                color: #d32f2f;
            }
        }

        &-link {
            &:hover {
                color: #009688;
            }
        }
    }

    &.xs {
        .vu-text-input__label,
        .vu-text-input__placeholder {
            font-size: 9px;
        }

        .vu-text-input__input {
            height: 24px;
            font-size: 12px;
        }
    }

    &.md {
        .vu-text-input__label,
        .vu-text-input__placeholder {
            font-size: 10px;
        }

        .vu-text-input__input {
            height: 31px;
            font-size: 13px;
        }
    }

    &.lg {
        .vu-text-input__label,
        .vu-text-input__placeholder {
            font-size: 11px;
        }

        .vu-text-input__input {
            height: 36px;
            font-size: 14px;
        }
    }

    &.required {
        .vu-text-input__label,
        .vu-text-input__placeholder {
            &:after {
                content: '*';
                color: #d32f2f;
                margin-left: 3px;
            }
        }
    }

    &.has-value,
    &.focus {
        .vu-text-input__placeholder {
            top: 3px;
            transform: translateY(0);
            padding-left: 6px;
            font-size: 9px;
            opacity: 0.8;
        }

        &.vu-text-input--xs {
            font-size: 6px;
        }

        &.vu-text-input--lg {
            font-size: 8px;
        }
    }

    &.focus {
        .vu-text-input__control {
            border: 1px solid #43a047;
        }
    }

    &.has-border {
        &.vu-text-input--focus {
            .vu-text-input__control {
                border: 1px solid #43a047;
            }

            .vu-text-input__input {
                border: 1px solid #43a047;
            }
        }
    }

    &.disabled {
        .vu-text-input__input {
            color: #37474f;
            background-color: transparent;
        }

        .vu-text-input__control {
            border-color: transparent;
            box-shadow: none;
            background-color: rgba(#eceff1, 0.6);
        }

        .vu-text-input__label,
        .vu-text-input__placeholder{
            color: #78909c;
        }
    }

    &.has-error {
        @include hasError();
    }
}

.ng-invalid {
    & > .vu-text-input {
        @include hasError();
    }
}
</style>