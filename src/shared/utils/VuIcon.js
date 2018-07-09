import Vue from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faEdit,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  faCheck,
  faEdit,
  faPlus,
  faTrashAlt,
);

const VuIcon = Vue.component('vu-icon', FontAwesomeIcon);

export default VuIcon;