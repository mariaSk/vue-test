<template>
    <div>
        <div class="row mb-3">
            <div class="col-2">Single:</div>
            <div class="col-4">
                <vu-checkbox :name="names[0]" :label="boolItem.label" v-model="model1" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model1 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Array:</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items" :name="names[2]" :label="item.label" :value="item.value" v-model="model2" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model2 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Disabled:</div>
            <div class="col-4">
                <vu-checkbox :name="names[2]" :label="boolItem.label" :disabled="disabled" v-model="model3" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model3 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Required:</div>
            <div class="col-4">
                <vu-checkbox :name="names[3]" :label="boolItem.label" :required="required" v-model="model4" />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model4 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4 text-uppercase font-weight-bold">
                Цвета
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Teal (по умолчанию):</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items"
                             :name="names[4]"
                             :label="item.label"
                             :value="item.value"
                             v-model="model5"
                />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model5 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Cyan:</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items"
                             :name="names[5]"
                             :label="item.label"
                             :value="item.value"
                             :styleClass="styleClass.cyan"
                             v-model="model6"
                />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model6 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Green:</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items"
                             :name="names[6]"
                             :label="item.label"
                             :value="item.value"
                             :styleClass="styleClass.green"
                             v-model="model7"
                />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model7 }}
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">Light blue:</div>
            <div class="col-4">
                <vu-checkbox v-for="item of items"
                             :name="names[7]"
                             :label="item.label"
                             :value="item.value"
                             :styleClass="styleClass.lightBlue"
                             v-model="model8"
                />
            </div>
            <div class="col-3">
                <span class="font-weight-bold">Результат: </span>{{ model8 }}
            </div>
        </div>
    </div>
</template>

<script>
  import VuCheckbox from '../../components/form/VuCheckbox/VuCheckbox';

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
        boolItem: {
          label: 'Да',
        },
        names: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8'],
        styleClass: {
          cyan: 'cyan',
          green: 'green',
          lightBlue: 'light-blue',
        },
        model1: false,
        model2: [],
        model3: false,
        model4: false,
        model5: [],
        model6: [],
        model7: [],
        model8: [],
      }
    }
  };
</script>