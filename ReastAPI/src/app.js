const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('./DBConnection/conn')
const seriesRoute = require('./Routers/seriesRoute')

app.use(express.json())
app.use(seriesRoute)

app.listen(port, () => {
    console.log(`connection is setup at Port ${port}`)
})