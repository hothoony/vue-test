## project setup
- install node

## npm install
```bash
## vue cli 설치
$ npm install -g @vue/cli

## vue 프로젝트 생성
$ vue create modal-proj
- Manually select features
- babel
- version 3
- dedicated config files
- save as a preset / no

## 개발 실행
$ npm run serve
```

## npm run
```bash
## development
$ npm run serve

## production
$ npm run build
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
  - editor 에서 'vue' 타이핑하고 tab 키 입력
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
// src/main.js
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
```html
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

## 2-way data binding
- input 에 값을 입력하면 model 의 값이 변경된다
- model 값이 변경되면 input 의 내용도 변경된다
```html
<!-- v-model 을 사용 -->
<template>
  <form>
      <label>Email:</label>
      <input type="email" required v-model="email"> <!-- here -->
  </form>
  <p>{{ email }}</p>
  <button @click="handleClick">click me</button>
</template>

<script>
export default {
    data() {
        return {
            email: '' // here
        };
    },
    methods: {
        handleClick() {
            this.email = 'aa'; // here
        }
    }
}
</script>
```

## form submit (prevent default)
```html
<form @submit.prevent="handleSubmit">
```
```javascript
  methods: {
      handleSubmit() {
          console.log('handleSubmit');
      }
  }
```

## router
- src/router/index.js
```javascript
const routes = [
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  }
]
```

- src/App.vue
```html
<router-link :to="{ name: 'Jobs' }">Jobs</router-link>
```

- src/views/jobs/Jobs.vue
```html
  <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: {id: job.id} }">
          <h2>{{ job.title }}</h2>
      </router-link>
  </div>
```

- src/views/jobs/JobDetails.vue
```html
<p>{{ $route.params.id }}</p>
```
```javascript
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
````

## router props
- src/router/index.js
```javascript
const routes = [
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true /* here */
  }
]
```
- src/views/jobs/JobDetails.vue
```html
<template>
  <p>{{ id }}</p> <!-- here -->
</template>
```
```javascript
export default {
  props: ['id'], /* here */
}
```

## redirect
- src/router/index.js
```javascript
const routes = [
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
]
```

## 404 page
- src/router/index.js
```javascript
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
```
- src/views/NotFound.vue
```html
<template>
  <h2>404</h2>
  <h3>Page not found</h3>
</template>
```

## router | redirect, back, forward
```javascript
// redirect
this.$router.push({name: 'Home'});
// back
this.$router.go(-1);
// forward
this.$router.go(1);
```

## json-server
```bash
## json-server 설치
$ npm install json-server

## data/db.json 파일을 rest api 로 서비스
$ json-server --watch data/db.json --port 3000
```

## fetch data list
- src/views/Jobs.vue
```html
<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id"> <!-- here -->
      <router-link :to="{ name: 'JobDetails', params: {id: job.id} }">
          <h2>{{ job.title }}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [] // here
        }
    },
    mounted() { // here
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.error(err.message))
    }
}
</script>
```

## fetch data detail
- src/views/jobs/JobDetails.vue
```html
<template>
  <h1>JobDetails</h1>
  <!-- <p>{{ $route.params.id }}</p> -->
  <!-- <p>{{ id }}</p> -->
  <p>{{ job && job.id }}</p>
  <p>{{ job && job.title }}</p>
  <p>{{ job && job.content }}</p>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            id: this.$route.params.id,
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
          .then(res => res.json())
          .then(data => this.job = data)
          .catch(err => console.error(err.message))
    }
}
</script>
```

## composition api
```javascript
import { ref, reactive } from '@vue/reactivity'

export default {
  setup() {
    // data
    // methods
    // computed
    // lifecycle hooks
  }
}
```
- `setup()` 메소드에서 2-way binding 을 사용하려면 `ref`, `reactive` 를 사용해야 하나 `reactive` 를 primitive 값 변경이 안된다
- `ref` 를 사용
