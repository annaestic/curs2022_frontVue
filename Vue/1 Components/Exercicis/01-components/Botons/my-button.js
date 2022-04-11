Vue.component('my-button', {
    // Podem cridar el templa amb el seu identificador
    //template: "#boto",
    //o també ho podem inclore dins del nostre ,
    template: `
      <div>
         <button @click="onAdd2">{{ count }} boto component</button><br>
      </div>
    `,
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onAdd2() {
            this.count += 1
        }
    }
})
