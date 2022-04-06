<details>
  <summary>for details...</summary>
  details content here
</details>


## vue 프로젝트 셋팅
- vscode 설치
- vscode plugins 설치
    - Live Server
    - Vetur
    - Meterial Icon Theme
- node 설치
- vue cli 설치
  ```bash
  $ npm install -g @vue/cli
  ```
- 기타
  ```bash
  ## vue-router
  $ npm install vue-router

  ## bootstrap
  $ npm install vue bootstrap-vue bootstrap
  ```

## vue 프로젝트 생성
```shell
$ vue create modal-proj
  - Manually select features
  - babel
  - version 3
  - dedicated config files (yes)
  - save as a preset (no)
```

## vue 프로젝트 실행
```bash
## 의존성 설치
$ npm install

## 개발 실행
$ npm run serve

## 프로덕션 실행
$ npm run build
```

## vue 프로젝트 폴더 구조
```
vue-proj-name/
  node-modules/
  public/
    index.html
  src/
    assets/
    components/
    router/
    views/
    App.vue
    main.js
  package.json
```

## .vue 파일 구조
- 3개 블럭으로 구성
```html
<template>
</template>

<script>
export default {
}
</script>

<style>
</style>
```

## &lt;script&gt; 블럭 구조
```html
<script>
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
  },
  props: [

  ],
  data() {
    return {
      appTitle: '앱 제목',
    }
  },
  methods: {
    handleClick(e) {
      console.log('handleClick', e.target);
      console.log(this.appTitle);
    }
  },
  computed: {

  },
  watch: {
    appTitle() {
      console.log('watch appTitle', appTitle);
    }
  },
  // Lifecycle Hook
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  errorCaptured() {
    console.log('errorCaptured');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  renderTracked() {
    console.log('renderTracked');
  },
  renderTriggered() {
    console.log('renderTriggered');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
}
</script>
```

## vue 제작 형태
- Widget
- SPA

## vue widget
- ### index.html
```html
<!-- vue js script 삽입 -->
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

## 2-way data binding
- input 에 값을 입력하면 model 의 값이 변경된다
- model 값이 변경되면 input 의 내용도 변경된다

## data binding
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

## form data binding
- `v-model=""`
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

## event handling
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

## event modifier
- `@click.self`
- `@click.right` 마우스 우클릭
- `@click.shift` shift 키보드 누른채로 클릭
- `@submit.prevent` e.preventDefault()
```html
<!-- modal 팝업창을 클릭해도 반응하도록 변경 -->
<button @click.self="closeModal">
```

## dynamic css class
```html
<li :class="{ fav: blog.isFav }">
```

## computed properties
- ### filterBlogs
```html
<script>
  export default {
    computed: {
        filterBlogs() {
            return this.blogs.filter(blog => blog.isFav);
        }
    }
  }
</script>
```

## for loop
```html
<li v-for="blog in blogs" :key="blog">{{ blog }}</li>

<li v-for="(blog, i) in blogs" :key="i">{{ blog }}, {{ i }}</li>
```

## ref
```html
<template>
  <input type="text" ref="name"> <!-- here -->
  <button @click="handleClick">click here</button>
</template>

<script>
export default {
  methods: {
      handleClick() {
          console.log(this.$refs.name); // here
      }
  }
}
</script>
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

## 자식 컴포넌트에 데이터 전달 (props 사용)
- 부모 Component
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
- 자식 Component
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

## 자식 컴포넌트에 데이터 전달 (binding 변수 사용)
- 부모 Component
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
- 자식 Component
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
## 자식 컴포넌트에 dynamic css class 전달
- 부모 Component
  ```html
  <!-- App.vue -->

  <template>
    <Modal :header="header" :message="message" theme="sale" /> <!-- here -->
  </template>
  ```
- 자식 Component
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
- `this.$emit('close');`
- 자식 Component
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
- 부모 Component
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

## style scoped
```html
<style scoped>
</style>
```

## global css 사용
- `global.css` 파일 생성
```css
/* src/assets/global.css */
```
- `global.css` 임포트
```javascript
// src/main.js
import './assets/global.css';
```

## slot (default slot)
- ### slot
  - `<slot></slot>`
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

- ### v-slot
  - `v-slot:links`
  ```html
  <template v-slot:links>

  </template>
  ```

- ### named slot
  - `<slot name="links"></slot>`
  ```html
    <!-- App.vue -->

    <Modal theme="sale">
      <template v-slot:links> <!-- here -->
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  ```
  ```html
    <!-- Modal.vue -->

    <div class="modal">
      <slot name="links"></slot><!-- here -->
    </div>
  ```

## teleport component
- `<teleport to="#modals" v-if="showModal">`
```html
<!-- index.html -->

<div id="modals"></div>
```
```html
<!-- App.vue -->

<teleport to="#modals" v-if="showModal">
  <Modal @close="toggleModal">
    <h1>modal2 title</h1>
    <p>modal2 content</p>
  </Modal>
</teleport>
```

## form submit (prevent default)
```html
<template>
  <form @submit.prevent="handleSubmit">
</template>

<script>
  export default {
    methods: {
        handleSubmit() {
            console.log('handleSubmit');
        }
    }
  }
</script>
```

## router
```javascript
// src/router/index.js

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

```html
<!-- src/App.vue -->

<router-link :to="{ name: 'Jobs' }">Jobs</router-link>
```

```html
<!-- src/views/jobs/Jobs.vue -->

<div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: {id: job.id} }">
        <h2>{{ job.title }}</h2>
    </router-link>
</div>
```

```html
<!-- src/views/jobs/JobDetails.vue -->

<template>
  <p>{{ $route.params.id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>
````

## router props
```javascript
// src/router/index.js

const routes = [
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true /* here */
  }
]
```

```html
<!-- src/views/jobs/JobDetails.vue -->

<template>
  <p>{{ id }}</p> <!-- here -->
</template>

<script>
export default {
  props: ['id'], /* here */
}
</script>
```

## redirect
```javascript
// src/router/index.js

const routes = [
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
]
```

## 404 page
```javascript
// src/router/index.js

import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
```

```html
<!-- src/views/NotFound.vue -->

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
```html
<!-- src/views/Jobs.vue -->

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
```html
<!-- src/views/jobs/JobDetails.vue -->

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
- `setup()` 메소드 하나에서 모두 사용
- `setup()` 메소드에서 2-way binding 을 사용하려면
  - `ref` 나 `reactive` 를 사용하면 되는데
  - `reactive` 는 primitive 값이 변경되지 안된다
  - `ref` 를 사용
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

## 기타
- Vue, Vuetify, Electron
