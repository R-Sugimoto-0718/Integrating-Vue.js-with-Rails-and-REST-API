import axios from 'axios'

export function listTasks () {
    return axios.get('/tasks.json').then(function(res) {
        return res.data;
    })
}

export function createTask(task) {
    var localTask = task;

    delete localTask.id;

    return axios.post('/tasks.json', localTask)
        .then(function (res) {
            return res.data;
        })
        .catch(function (error) {
            console.log(error)
        })
}