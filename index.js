const express = require('express')
const { router } = require('./routes/user.route')
const connect = require('./config/db')
const app = express()

app.use(router)

app.listen(8090,()=>{
    console.log("Server is listening on port 8090")
    connect(console.log("Database connected Successfully."))
})