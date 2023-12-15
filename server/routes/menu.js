const express = require('express')
const router = express.Router()
const Menu = require('../models/Menu')

router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find()
        res.json(menus)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const menu = new Menu({
        name: req.body.name,
        category: req.body.categorie,
        description: req.body.description,
        price: req.body.price
    })
    try {
        const newMenu = await menu.save()
        res.status(201).json(newMenu)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/:id', (req, res) => {
    Menu.findById(req.params.id).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router