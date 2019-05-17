const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')


/* MIDDLEWARE */
app.use(morgan('dev'))
app.use(bodyParser.json())
/* Settings */
app.set('port', process.env.PORT || 3000)




/*ROUTES */
require('./routes/notificationRoutes')(app)
app.listen( app.get('port'), ()=> {
    console.log(`server on port ${app.get('port')}`)
})