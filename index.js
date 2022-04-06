const express = require('express')
const app = express();

app.get('/',(req,res) => {
    res.json({
        status: 'ok'
    })
})

const port = 8080

app.listen(port, ()=>{
    console.log(`server is listening at localhost: ${port}`)
})