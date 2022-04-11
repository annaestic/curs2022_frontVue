Vue.component('blog-post', {
    props: ['post'],
    data: function() {
        return {
          valorHijo:1
        }
     },
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3> 
        Valor del texto <input v-model="valorHijo">       
        <button v-on:click="enviarPadre()"> Agrandar texto </button>
      </div>
      /*
      
      <button v-on:click="$emit('enlarge-text', valorHijo)"> Agrandar texto </button> */
    `,
    methods: {
        enviarPadre: function() {
            this.$emit('enlarge-text', this.valorHijo);
        }        
    }
  })

