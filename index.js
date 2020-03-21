const express = require("express")
const booksRoute = require("./route/books-route")

const server = express()
const port = 4000

server.use(express.json())
server.use("/books", booksRoute)

server.get("/", (req, res, next ) => {
    res.json({
        message: "Welcome to my API"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong!"
    })
})
if(!module.parent){
    server.listen(port, () => {
        console.log(`Server is listening on ${port}...`)
    })
}

module.exports = server