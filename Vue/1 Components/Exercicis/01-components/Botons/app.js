const app = new Vue({
    el: '#my-app',
    data:{      
        name: 'Hola classe, això és un exemple de COMPONENT',
        firstName: 'Anna',
        lastName: 'Marcilla',
        count: 0
    },
    methods: {
        onAdd() {
            this.count += 1
        }
    }
})