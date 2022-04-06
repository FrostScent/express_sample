const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res) => {
    res.json({
        status: 'ok'
    })
})

app.post('/post', (req,res) => {
    res.json({status: 'ok',body: req.body})
})

const port = 8080

app.listen(port, ()=>{
    console.log(`server is listening at localhost: ${port}`)
})