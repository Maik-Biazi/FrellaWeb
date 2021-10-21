const express = require("express")
const server = express()

server.get('/', (request,response)=>{
    console.log('entrei no index')

    return response.send('oii')
})

server.listen(3000,()=>{
    console.log('rodando')
})
