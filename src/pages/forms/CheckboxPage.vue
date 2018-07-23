<template>
    <div>
        <div class="row mb-3">
            <div class="col-2">Без параметров:</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items" :label="item.label" :value="item.value" v-model="model1" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат:</span>{{ model1 }}
            </div>
        </div>
    </div>
</template>

<script>
  import VuCheckbox from '../../components/form/VuCheckbox';

  export default {
    name: 'CheckboxPage',
    components: {
      VuCheckbox,
    },
    data() {
      return {
        disabled: true,
        required: true,
        size: {
          xs: 'xs',
          md: 'md',
          lg: 'lg',
        },
        items: [
          {
            label: 'Вариант 1',
            value: 'Вариант 1',
          },
          {
            label: 'Вариант 2',
            value: 'Вариант 2',
          },
          {
            label: 'Вариант 3',
            value: 'Вариант 3',
          }
        ],
        model1: null,
      }
    }
  };
</script>