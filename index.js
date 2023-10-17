// server creation 

//const http =require('http')
//console.log(http)

// import http from 'http'
// import fun from './features.js'
// fun()
//  const server=http.createServer((req,res,next)=>{
//     console.log(req.url)

//     if(req.url==="/about"){
//         res.end("<h1>About page </h1>")
//     }
//     else if(req.url==='/'){
//         res.end("<h1>Home Page </h1>")
        
//     }else if(req.url==='/contact'){
//         res.end("<h1>Contact Page </h1>")

//     }else{
//         res.end("<h1>404 Page Not Found </h1>")

//     }
   
// })

// server.listen(5000,()=>{
//     console.log('Server is working')
// })


// express framework

import express from 'express'

// const server =express()

// server.listen(5000,()=>{
//     console.log("server is working")
// })

const app=express();

app.get('/',(req,res,next)=>{
    // res.sendStatus(404)

    res.json({
        success:true,
        product:[]
    })
})

app.listen(5000,()=>{
    console.log(" srever is working")
})