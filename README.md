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

## binding
- `{{ variable }}`
```html
<template>
    <div>{{ myVar1 }}</div> <!-- myVar1 바인딩 -->
</template>

<script>
export default {
  data() {
    return {
      myVar1: 'hello world', // myVar1 정의
    }
  },
</script>
```

## attribute binding
- `v-bind:attribute`
- `:attribute`
```html
<template>
    <!-- basic -->
    <h4 v-bind:style="myStyle">this is heading 1</h4> <!-- myStyle 바인딩 -->

    <!-- shortcut -->
    <h4 :style="myStyle">this is heading 2</h4> <!-- myStyle 바인딩 -->
</template>

<script>
export default {
  data() {
    return {
      myStyle: 'color: red;', // myStyle 정의
    }
  },
}
</script>
```

## mouse click event handling
- `v-on:event`
- `@event`
```html
<template>
    <!-- basic -->
    <button v-on:click="handleClick">click btn 1</button>

    <!-- shortcut -->
    <button @click="handleClick">click btn 2</button>
</template>

<script>
export default {
  methods: {
      handleClick(e) {
          console.log(e.target);
      }
  },
}
</script>
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
<li v-for="blog in blogs" :key="blog">{{ blog }}</li>
```
```html
<li v-for="(blog, i) in blogs" :key="i">{{ blog }}, {{ i }}</li>
```
