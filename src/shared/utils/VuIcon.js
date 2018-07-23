import Vue from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faEdit,
  faLink,
  faPlus,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';


library.add(
  faCheck,
  faEdit,
  faLink,
  faPlus,
  faTimes,
  faTrashAlt,
);

const VuIcon = Vue.component('vu-icon', FontAwesomeIcon);

export default VuIcon;