new Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 0,
    result: 0,
    logs: [],
  },
  methods: {
    multiply() {
      this.result = this.num1 * this.num2;
      this.addLog(this.num1 + " * " + this.num2, this.result);
    },
    addLog(input, result) {
      this.logs.unshift({ input, result });
      if (this.logs.length > 10) {
        this.logs.pop();
      }
    },
    clearLogs() {
      this.logs = [];
    },
  },
});

