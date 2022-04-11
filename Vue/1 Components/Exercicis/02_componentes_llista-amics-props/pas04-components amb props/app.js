const app = new Vue({
  el: '#app',
  data() {
    return {
      friends: [{
          id: '01',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991444',
          email: 'manuel@localhost.com',
        },
        {
          id: '02',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
        {
          id: '03',
          name: 'Moni Lopez',
          phone: '11111 543 221',
          email: 'moni@localhost.com',
        },
      ],
    };
  },
});

