const express = require('express')
const app = express()
const mongoose = require('mongoose')
const CategorieModel = require('./models/Categories')
const MenuModel = require('./models/Menus')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://mlaminsngom:ID0PRdv2OOep8PHh@merndb.nnrxhis.mongodb.net/sushigyal?retryWrites=true&w=majority')

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

app.listen(3001, () => {
    console.log('server running on port 3001...')
})