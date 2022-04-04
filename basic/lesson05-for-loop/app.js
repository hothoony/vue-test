const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            blogs: [
                {title: 'title1', content: 'content1'},
                {title: 'title2', content: 'content2'},
                {title: 'title3', content: 'content3'},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
    }
})

app.mount('#app')
