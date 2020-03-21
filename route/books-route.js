const express = require('express')
const Books = require('./books-model')

const route = express.Router()

route.get("/", async (req, res, next) => {
    try{
        res.json(await Books.find())
    } catch (err){
        next(err)
    }
})

route.post("/", async (req, res, next) => {
    try{
        const book = await Books.add(req.body)
        res.status(201).json(book)
    } catch (err){
        next(err)
    }
})

module.exports = route