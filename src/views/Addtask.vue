<template>
<form>
  <div class="p-3 mb-2 bg-info text-dark">
    <h3>Welcome to Add Task page</h3>
      <div>
        <input type="text" placeholder="Task Name " v-model="content.task">
      </div>
      <br>
       <div>
        <select v-model="content.priority">
          <option v-for="item in priority" :key="item"> {{ item }} </option>
        </select>
      </div>
      <br>
      <button @click.prevent="Upload" class="btn btn-primary"> Add The Task</button>
  </div>
</form>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
        content:{
             task:'',
             priority:'',
             status:'undone'
        },
        priority:['high','medium','low'],
    }
  },
  methods:{
    Upload(){
         axios.post('https://new-demo-3bd77-default-rtdb.firebaseio.com/tasks.json',this.content)
         this.$router.push({name:'Home'})
    }
  }
}
</script>
  