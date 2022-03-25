## project setup
- install node

## npm install
```shell
npm install -g @vue/cli

vue create modal-proj
- Manually select features
- babel
- version 3
- dedicated config files
- save as a preset / no

npm run serve
```

## Vue Component (App.vue)
- ### 3개 블럭으로 구성
```html
<template>
</template>

<script>
</script>

<style>
</style>
```

## ref
```html
<input type="text" ref="name"> <!-- here -->
<button @click="handleClick">click here</button>
```
```javascript
methods: {
    handleClick() {
        console.log(this.$refs.name); // here
    }
}
```

## component 만들기, 사용하기
- ### Modal.vue 컴포넌트 만들기
```html
<!-- src/components/Modal.vue -->
<template>
    <div class="backdrop">
        <div class="modal">
            <p>modal content</p>
        </div>
    </div>    
</template>
```
- ### Modal.vue 컴포넌트 사용하기
```html
<!-- src/App.vue -->
<template>
  <Modal /> <!-- here -->
</template>

<script>
import Modal from './components/Modal.vue' // here

export default {
  name: 'App',
  components: {
    Modal // here
  }
}
</script>
```

## style scoped
```html
<style scoped>
</style>
```

## global css
```css
/* src/assets/global.css */
```
```javascript
// main.js
import './assets/global.css';
```

## props
- ### 자식 컴포넌트에 데이터 전달
  - App.vue
  ```html
  <!-- App.vue -->
  <template>
    <Modal header="this is title" message="this is message" /> <!-- here -->
  </template>

  <script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: {
      Modal
    }
  }
  </script>
  ```
  - Modal.vue
  ```html
  <!-- Modal.vue -->
  <template>
      <div class="backdrop">
          <div class="modal">
              <h1>{{ header }}</h1> <!-- here -->
              <p>{{ message }}</p> <!-- here -->
          </div>
      </div>    
  </template>

  <script>
  export default {
      props: ['header', 'message'] // here
  }
  </script>
  ```

- ### binding 변수로 전달
  - App.vue
  ```html
  <!-- App.vue -->
  <template>
    <Modal :header="header" :message="message" /> <!-- here -->
  </template>

  <script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: {
      Modal
    },
    data() {
      return {
        header: 'title 22', // here
        message: 'content 22', // here
      }
    }
  }
  </script>
  ```
  - Modal.vue
  ```html
  <!-- Modal.vue -->
  <template>
      <div class="backdrop">
          <div class="modal">
              <h1>{{ header }}</h1> <!-- here -->
              <p>{{ message }}</p> <!-- here -->
          </div>
      </div>    
  </template>

  <script>
  export default {
      props: ['header', 'message'] // here
  }
  ```
- ### dynamic css class 전달
  - App.vue
  ```html
  <!-- App.vue -->
  <template>
    <Modal :header="header" :message="message" theme="sale" /> <!-- here -->
  </template>
  ```
  - Modal.vue
  ```html
  <!-- Modal.vue -->
  <template>
      <div class="backdrop">
          <div class="modal" :class="{ sale: theme === 'sale' }"> <!-- here -->
              <h1>{{ header }}</h1>
              <p>{{ message }}</p>
          </div>
      </div>    
  </template>

  <script>
  export default {
      props: ['header', 'message', 'theme'] // here
  }
  </script>

  <style>
  /* here */
  .sale {
      color: orange;
  }
  </style>

  ```

## 자식 컴포넌트에서 event 발생시키기
- Modal.vue
```html
<!-- Modal.vue -->
<template>
    <div class="backdrop" @click="closeModal"> <!-- here -->
        <div class="modal">
            <h1>{{ header }}</h1>
            <p>{{ message }}</p>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['header', 'message'],
    methods: {
        closeModal() {
            this.$emit('close'); // here, close 이벤트 발생
        }
    }
}
</script>
```
- App.vue
```html
<!-- App.vue -->
<template>
  <div v-if="showModal">
    <Modal @close="toggleModal" /> <!-- here, close 이벤트 리스닝 -->
  </div>
  <button @click="toggleModal">show modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() { // here
      this.showModal = !this.showModal;
    }
  }
}
</script>
```

## event modifier
```html
<!-- modal 팝업창을 클릭해도 반응하도록 변경 -->
<button @click.self="closeModal">

<!-- 마우스 우클릭 -->
@click.right

<!-- shift 키보드 누른채로 클릭 -->
@click.shift
```

## slot (default slot)
- slot
```html
<!-- App.vue -->
  <Modal theme="sale" @close="toggleModal">
    <!-- slot 에 전달할 내용 -->
    <h1>title from app</h1>
    <p>content from app</p>
    <!-- slot 에 전달할 내용 -->
  </Modal>
```
```html
<!-- Modal.vue -->
  <div class="modal" :class="{ sale: theme === 'sale' }">
    <slot></slot><!-- slot 태그 블럭은 전달되는 내용으로 대체된다 -->
  </div>
```
- v-slot
```
<template v-slot:links>

</template>
```

## named slot
- App.vue
```html
  <Modal theme="sale">
    <template v-slot:links> <!-- here -->
      <a href="#">sign up</a>
      <a href="#">more info</a>
    </template>
  </Modal>
```
- Modal.vue
```html
  <div class="modal">
    <slot name="links"></slot><!-- here -->
  </div>
```

## teleport component
- index.html
```html
<div id="modals"></div>
```
- App.vue
```html
  <teleport to="#modals" v-if="showModal">
    <Modal @close="toggleModal">
      <h1>modal2 title</h1>
      <p>modal2 content</p>
    </Modal>
  </teleport>
```
