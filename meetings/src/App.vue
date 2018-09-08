<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <h3>Tasks:</h3>
      <ul>
          <li v-for="(task, index) in tasks" :key="task.id">
              {{ task.name }}

              <button @click="removeTask(index)">x</button>
          </li>
      </ul>

      <h3>Add new task</h3>
    <form @submit.prevent="addTask()">
        <input placeholder="task"
          name="task"
          v-model="newTasks.name" 
          v-validate="'required'">
        <button type="submit">Add task</button>
        <div v-show="errors.has('task')">
          {{ errors.first('task') }}
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "task1"
        },
        {
          id: 2,
          name: "task2"
        },
        {
          id: 3,
          name: "task3"
        },
        {
          id: 4,
          name: "task4"
        }
      ],
      newTasks: {
        name: ""
      }
    };
  },
  methods: {
    addTask() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        const id = Math.random();

        this.tasks.push({
          id: id,
          ...this.newTasks
        });
        this.newTasks.name = "";
        this.$validator.reset();
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
