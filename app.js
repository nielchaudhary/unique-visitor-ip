const express = require('express')
const app = express()

var cookieParser = require('cookie-parser')


app.use(cookieParser())



const uniqueVisitors = new Set()
function generator() {
    const randomString  = Math.random().toString(36)
    return `${randomString}`
}

app.use((req, res, next) => {
    const visitorId = req.cookies["visitor_id"]
    if (!visitorId) {
        const newVisitorId = generator()
        uniqueVisitors.add(newVisitorId)
    }
    next()

})

app.get('/unique-visitors', (req,res)=>{
    res.json({count : uniqueVisitors.size})
})


app.listen(3000,()=>{
    console.log("This server is running on Port 3000")
})






app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})