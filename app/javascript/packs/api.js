import axios from 'axios'

export function listTasks () {
    return axios.get('/tasks.json').then(function(res) {
        return res.data;
    })
}

listTasks().then(function(res) {
    console.log(res)
})