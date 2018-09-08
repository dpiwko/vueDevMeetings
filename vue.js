const app = new Vue({
    el: '#app',
    data: {
        'headline': 'Vue.js DevMeetings',
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
})