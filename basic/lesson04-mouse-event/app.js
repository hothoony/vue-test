const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'my article',
            author: 'me',
            age: 20,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e);
            console.log(e.type);
            
            if (data) {
                console.log('data', data);
            }
        },
        handleMousemove(e) {
            console.log(e);
            console.log(e.type);
            
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')
