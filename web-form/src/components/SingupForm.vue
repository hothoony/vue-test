<template>
  <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Role:</label>
      <select v-model="role">
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="terms">
          <label>
              <input type="checkbox" v-model="terms" required>
              Accept terms and conditions
          </label>
      </div>

      <div class="submit">
          <button>submit</button>
      </div>

      <div>
          <label><input type="checkbox" value="shaun" v-model="names">Shaun</label>&nbsp;
          <label><input type="checkbox" value="yoshi" v-model="names">Yoshi</label>&nbsp;
          <label><input type="checkbox" value="mario" v-model="names">Mario</label>&nbsp;
      </div>
  </form>

  <p>{{ email }}</p>
  <p>{{ password }}</p>
  <p>{{ role }}</p>
  <p>{{ terms }}</p>
  <p>{{ names }}</p>
  <button @click="handleClick">click me</button>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: ''
        };
    },
    methods: {
        handleClick() {
            console.log('handleClick');
            this.email = 'aa';
        },
        addSkill(e) {
            console.log(e);
            if (e.key === ' ' && this.tempSkill) {
                this.tempSkill = this.tempSkill.trim();
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            console.log(skill);
            this.skills = this.skills.filter(item => item !== skill);
        },
        handleSubmit() {
            console.log('handleSubmit');
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long';
            if (!this.passwordError) {
                console.log('email', this.email);
                console.log('password', this.password);
                console.log('role', this.role);
                console.log('terms', this.terms);
                console.log('skills', this.skills);
            }
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
</style>
