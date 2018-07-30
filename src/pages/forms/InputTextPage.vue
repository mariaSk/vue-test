<template>
    <div>
        <div class="row mb-3">
            <div class="col-2">Без параметров:</div>
            <div class="col-4">
                <vu-input v-model="value1" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value1 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Label:</div>
            <div class="col-4">
                <vu-input :label="label" v-model="value2" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value2 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Placeholder:</div>
            <div class="col-4">
                <vu-input :placeholder="label" v-model="value3" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value3 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Required:</div>
            <div class="col-4">
                <vu-input :label="label" :required="required" v-model="value4" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value4 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Disabled:</div>
            <div class="col-4">
                <vu-input :disabled="disabled" v-model="value5" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value5 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4 text-uppercase font-weight-bold">
                Размеры
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">xs:</div>
            <div class="col-4">
                <vu-input :size="size.xs" v-model="value6" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value6 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">md:</div>
            <div class="col-4">
                <vu-input :size="size.md" v-model="value7" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value7 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">lg (по умолчанию):</div>
            <div class="col-4">
                <vu-input v-model="value8" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value8 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4 text-uppercase font-weight-bold">
                Иконки
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Clear:</div>
            <div class="col-4">
                <vu-input :clear="clear" v-model="value9" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value9 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Link:</div>
            <div class="col-4">
                <vu-input :link="link" v-model="value10" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value10 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Clear, Link:</div>
            <div class="col-4">
                <vu-input :clear="clear" :link="link" v-model="value11" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span> {{ value11 }}
            </div>
        </div>
    </div>
</template>

<script>
    import VuInput from '../../components/form/VuInput/VuInput';

    export default {
      name: 'InputTextPage',
      components: {
        VuInput,
      },
      data() {
        return {
          label: 'Введите текст',
          disabled: true,
          required: true,
          clear: true,
          link: true,
          size: {
            xs: 'xs',
            md: 'md',
            lg: 'lg',
          },
          value1: null,
          value2: null,
          value3: null,
          value4: null,
          value5: null,
          value6: null,
          value7: null,
          value8: null,
          value9: null,
          value10: null,
          value11: null,
        }
      }
    };
</script>