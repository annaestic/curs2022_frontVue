const app = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [{
      id: 1,
      title: "titulo 01"
    }, {
      id: 2,
      title: "titulo 02"
    }],
    postFontSize: 1,
  },
  methods: {
    onEnlargeText: function (valor) {
      console.log(valor);
      this.postFontSize = valor
    }
  }
})