const model = require('./books-model')
const db = require('../data/config')

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

test("findById", async () => {
    const res = await model.findById(1)
    expect(res.name).toBe("Untethered Soul")
})

test("add", async () => {
    const res = await model.add({name: "KOKO"})
    expect(res.name).toBe("KOKO")
})

test("update", async () => {
    const res = await model.update(2, { name: "LALA"})
    expect(res.name).toBe("LALA")
})

test("remove", async () => {
   await model.remove(2)
   const books = await db("books").select()
    expect(books).toHaveLength(3)
})