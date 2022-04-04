const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'my article',
            author: 'me',
            age: 20
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
