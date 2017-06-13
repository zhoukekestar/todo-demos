// const Vue = require('vue');
const moment = require('moment');
const app = new Vue({
  el: '#app',
  data: {
    message: `Hello Vue! ${moment().format()}`
  }
});

console.log('app');
[1, 2, 3].map(n => {
  console.log(n)
})
