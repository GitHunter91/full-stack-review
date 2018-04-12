require('dotenv').config()
const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
const session = require('express-session')
const userController = require('./userController')

const app = express()
app.use(bodyParser.json())
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   cookie:{
       maxAge: 1000 * 60 * 60 * 24 * 14,
   }
}))

app.get('/auth/callback', userController.auth)
app.get('/api/profile', userController.profile)
app.post('/api/logout', userController.logout)


const port = 3050
app.listen(port, (()=>{
    console.log('Listening on port' + port +  '🚀')
}))

