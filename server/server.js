if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const CategorieModel = require('./models/Categories')
const MenuModel = require('./models/Menus')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const indexRouter = require('./routes/index')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

app.get('/getCategories', (req, res) => {
    CategorieModel.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

app.get('/getMenus', (req, res) => {
    MenuModel.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

// app.post('/createUser', async (req, res) => {
//     const user = req.body
//     const newUser = new UserModel(user)
//     await newUser.save()
//     res.json(user)
// })

app.use('/', indexRouter)

app.listen(process.env.PORT || 3001, () => {
    console.log('server running on port 3001...')
})