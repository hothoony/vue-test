const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            blogs: [
                {title: 'title1', content: 'content1', img: 'assets/1.png'},
                {title: 'title2', content: 'content2', img: 'assets/2.png'},
                {title: 'title3', content: 'content3', img: 'assets/3.png'},
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
