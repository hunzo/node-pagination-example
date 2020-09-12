const api = require('./api')

module.exports = {
    getUsers() {
        return api().get('/users')
    }
}