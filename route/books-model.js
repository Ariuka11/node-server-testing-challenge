const db = require("../data/config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("books")
}

function findById(id) {
    return db("books").where("id", id).first()
}

async function add(book) {
    const [id] = await db("books").insert(book)
    return findById(id)
}

async function update(id, change) {
    await db("books").update(change).where("id", id)
    return findById(id)
}

function remove(id) {
    return db("books").where("id", id).del()
}