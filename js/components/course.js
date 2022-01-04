Vue.component('course', {
  props: ['name'],
  template: '<div>{{ name }} : {{ courseDescriptions[name] }}</div>'
});

const courseDescriptions = {
  EECS1001 : "Description for EECS1001",
  EECS1012 : "Description for EECS1012"
}

var EECS1001 = new Vue({ el: '#EECS1001' });
var EECS1012 = new Vue({ el: '#EECS1012' });
