Vue.component('course-css', {
    mixins: [course],
    data: function () {
        return {
            styleClass: 'course-css',
            header: {
                title: 'Curso CSS',
                image: 'https://picsum.photos/64/64'
            }
        }
    },
});

