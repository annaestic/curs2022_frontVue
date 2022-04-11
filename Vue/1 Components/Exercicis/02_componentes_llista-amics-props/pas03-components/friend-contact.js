Vue.component('friend-contact', {
    template: `
    <div>
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  </div>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenzo component',
                phone: '01234 5678 9916666',
                email: 'manuel@localhost.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});