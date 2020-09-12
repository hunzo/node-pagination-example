const renderPagination = (model, page, limit) => {
    page = parseInt(page)
    limit = parseInt(limit)

    startIndex = (page - 1) * limit
    endIndex = page * limit

    const results = {}

    results.results = model.length
    results.all_pages = Math.ceil( model.length / limit)

    if (endIndex < model.length) {
        results.next = {
            page: page + 1,
            next: limit,
            link: `http://localhost:3000/users?page=${page + 1}&limit=${limit}`
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            next: limit,
            link: `http://localhost:3000/users?page=${page - 1}&limit=${limit}`
        }
    }    

    results.result =  model.slice(startIndex, endIndex)

    return results
}

module.exports = {
    renderPagination
}