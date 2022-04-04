# [README2](README2.md)

## 개발환경 셋팅

- ### vscode plugins
    - Live Server
    - Vetur
    - Meterial Icon Theme

## vue 제작 형태
- SPA
- Widget

## vue widget
- ### index.html
```html
<!-- script 삽입 -->
<script src="https://unpkg.com/vue@3.0.2"></script>

<!-- app container -->
<div id="app">
</div>
```
- ### app.js
```javascript
// app 생성
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

// div 에 마운트
app.mount('#app');
```

## print variable
```html
<div>{{ variable }}</div>
```

## mouse event handling
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

## for loop
```html
<li v-for="blog in filterBlogs">
```
