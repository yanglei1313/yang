import Vue from 'vue'


import eltable from "./eltable/index.vue"
import elfilters from "./elfilters/index.vue"
import elform from "./elform/index.vue"
import eldialog from "./eldialog/index.vue"
import eldetails from "./eldetails/index.vue"

Vue.component('Y-table',eltable)
Vue.component('Y-filters',elfilters)
Vue.component('Y-form',elform)
Vue.component('Y-dialog',eldialog)
Vue.component('Y-details',eldetails)