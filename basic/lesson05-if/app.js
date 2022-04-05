const app = Vue.createApp({
    data() {
        return {
            showBlog1: true,
            showBlog2: false,
            showBlog3: true,
            blogs: [
                {title: 'title1', content: 'content1'},
                {title: 'title2', content: 'content2'},
                {title: 'title3', content: 'content3'},
            ]
        }
    },
})

app.mount('#app')
