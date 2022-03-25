[README2](README2.md)

## 개발환경 셋팅

- ### vscode
- ### vscode plugins
    - Live Server
    - Vetur
    - Meterial Icon Theme

## vue 제작 형태
- SPA
- Widget

## vue script 삽입
```html
<script src="https://unpkg.com/vue@3.0.2"></script>
```

## app.js
```javascript
const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            blogs: [
                {title: 'title1', content: 'content1', img: 'assets/1.png', isFav: true},
                {title: 'title2', content: 'content2', img: 'assets/2.png', isFav: true},
                {title: 'title3', content: 'content3', img: 'assets/3.png', isFav: true},
            ]
        }
    },
    methods: {
    },
    computed: {
    }
})

app.mount('#app');
```
```html
<div id="app">
</div>
```

## print variable
```html
<div>{{ variable }}</div>
```

## mouse event
```html
<!-- basic -->
<button v-on:click="handleClick">

<!-- shortcut -->
<button @click="handleClick">
```

## attribute binding
```html
<!-- basic -->
<img v-bind:src="blog.img">

<!-- shortcut -->
<img :src="blog.img">
```

## dynamic css class
```html
<li :class="{ fav: blog.isFav }">
```

## computed properties
- ### filterBlogs
```javascript
    computed: {
        filterBlogs() {
            return this.blogs.filter(blog => blog.isFav);
        }
    }
```
```html
<li v-for="blog in filterBlogs">
```
