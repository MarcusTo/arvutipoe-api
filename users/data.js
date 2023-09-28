let data = [
    {id:1,name:"Gaming PC Ultra", price: 3999},
    {id:2,name:"Gaming PC Mega", price: 2450},
    {id:3,name:"Gaming PC Casual", price: 1999},
    {id:4,name:"Gaming PC Starter", price: 1450},
    {id:5,name:"Gaming PC Budget", price: 650},
]

exports.getAll = ()=> {
    return data.map(p=> {return {"id": p.id,"name": p.name}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}

