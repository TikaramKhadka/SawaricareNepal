const express = require('express')
const UserRoute = require('./route/users')
const app = express()
const port = 3000

app.use(UserRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})