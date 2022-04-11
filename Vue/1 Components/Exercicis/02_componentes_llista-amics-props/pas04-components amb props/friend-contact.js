Vue.component('friend-contact', {
    template: `
    <div>
    <li>
      <h2>{{ amic.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ amic.phone }}</li>
        <li><strong>Email:</strong> {{ amic.email }}</li>
      </ul>
    </li>
  </div>
    `,
    // Props
    props: ['amic'],
    data() {
        return {
            detailsAreVisible: false,           
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});