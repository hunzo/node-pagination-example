const ex = require('express')
const callapi = require('./services/callapi')
const services = require('./services/function')

const app = ex()

app.get('/users', (req, res) => {
    page = parseInt(req.query.page) 
    limit = parseInt(req.query.limit)

    callapi.getUsers()
        .then(rs => {
            ret = services.renderPagination(rs.data, page, limit)
            res.json(ret)
        })
        .catch(e => {
            res.json(e)
        })   
})

app.get('*', (req, res) => {
    res.send({
        info: "pagination example",
        enpoint: "/users?limit=10&page=1"
    })
})

app.listen(3000)