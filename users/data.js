let data = [
    { id: 1, name: "Marcus", phoneNumber: 1111111 },
    { id: 2, name: "Rasmus", phoneNumber: 2222222 },
    { id: 3, name: "Tiit", phoneNumber: 3333333 },
    { id: 4, name: "Teet", phoneNumber: 4444444 },
    { id: 5, name: "Markus-Johannes", phoneNumber: 5555555 }
]

exports.getAll = () => {
    return data.map(g => { return { "id": g.id, "name": g.name } })
}
exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}