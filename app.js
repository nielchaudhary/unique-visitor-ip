const express = require('express')
const app = express()

var cookieParser = require('cookie-parser')


app.use(cookieParser())









app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})