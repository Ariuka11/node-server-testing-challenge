const server = require('./index')
const supertest = require('supertest')
const db = require("./data/config")

beforeEach(async () => {
   await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

test("Welcome", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
})

test("Create Books", async () => {
    const res = await supertest(server).post("/books").send({ name: "Art of Living"})
    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe("Art of Living")
})