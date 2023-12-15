if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

const menusRouter = require('./routes/menu')
const categoriesRouter = require('./routes/categories')

app.use('/menus', menusRouter)
app.use('/categories', categoriesRouter)

app.listen(process.env.PORT || 3001, () => {
    console.log('server running on port 3001...')
})