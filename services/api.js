const axios = require('axios')

module.exports = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            "Content-Type": "application/json"
        }
    })
}