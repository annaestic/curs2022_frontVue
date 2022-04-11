Vue.component('course-js', {
    mixins: [course],
    data: function () {
        return {
            styleClass: 'course-js',
            header: {
                title: 'Curso JS',
                image: 'https://picsum.photos/64/64'
            }
        }
    },
});