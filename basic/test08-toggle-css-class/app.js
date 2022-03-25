const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            blogs: [
                {title: 'title1', content: 'content1', img: 'assets/1.png', isFav: true},
                {title: 'title2', content: 'content2', img: 'assets/2.png', isFav: true},
                {title: 'title3', content: 'content3', img: 'assets/3.png', isFav: true},
                {title: 'title4', content: 'content4', img: 'assets/4.png', isFav: false},
                {title: 'title5', content: 'content5', img: 'assets/5.png', isFav: false},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(blog) {
            blog.isFav = !blog.isFav;
        }
    }
})

app.mount('#app')
