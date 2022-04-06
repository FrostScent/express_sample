const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res) => {
    res.json({
        status: 'ok'
    })
})

app.post('/post', (req,res) => {
    user = req.body.user
    res.json({user:user})
})

const port = 8080

app.listen(port, ()=>{
    console.log(`server is listening at localhost: ${port}`)
})