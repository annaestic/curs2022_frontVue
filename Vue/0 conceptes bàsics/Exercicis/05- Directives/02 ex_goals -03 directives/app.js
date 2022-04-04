var vm = new Vue({
  el: '#app',
  data: {
    goals: [],
    enteredValue: ''
   },
  methods: {
    addGoal() {
      console.log("Goal añadido " + this.enteredValue);
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
})
