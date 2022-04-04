var vm = new Vue({
  el: '#app',
  data: {
    goals: [],
    enteredValue: 'HOLA'
   },
  methods: {
    addGoal: function() {
      console.log(this.goals);
      console.log("Goal añadido " + this.enteredValue);
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
})
