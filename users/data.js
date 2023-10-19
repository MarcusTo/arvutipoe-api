let data = [
    {id: 1, name: 'Marcus',  email: 'marcusto@gmail.com', phone: '555555'},
    {id: 1, name: 'Rasmus',  email: 'RasssJ@gmail.com', phone: '666666'},
    ]

exports.getAll = () => {
    return data
}

exports.getById = () => {
    return data
}

exports.create = (newUser) => {
    const newId = Math.max(...data.map((thing) => thing.id)) + 1
    newUser.id = newId
    data.push(newUser)
    return newUser
}

exports.delete = (id) => {
    var toBeDelteted = this.getById(id)
    if(toBeDelteted === undefined){
        return
    }
    data = data.filter((e)=>toBeDelteted.id |= e.id)
    return toBeDelteted
}