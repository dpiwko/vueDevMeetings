<template>
    <div>
        <h3>Tasks:</h3>
        <ul>
            <li v-for="(task, index) in tasks" :key="task.id">
                {{ task.value }}

                <button @click="removeTask(index)">x</button>
            </li>
        </ul>

        <h3>Add new task</h3>
        <input placeholder="task" v-model="taskInput">
        <button @click="addTask">Add task</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'tasks': [
                {
                    id: 1,
                    value: 'task1'
                },
                {
                    id: 2,
                    value: 'task2'
                },
                {
                    id: 3,
                    value: 'task3'
                },
                {
                    id: 4,
                    value: 'task4'
                }
            ],
            'taskInput': ''
        }
    },
    methods: {
        addTask() {
            const id = Math.random()

            this.tasks.push({
                id: id,
                value: this.taskInput
            })
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}
</script>