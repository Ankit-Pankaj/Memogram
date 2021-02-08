const express = require('express')
const memeCtrl = require('../conrollers/memeCtrl')
const router = express.Router()


router.post('/', memeCtrl.createMeme)
router.get('/', memeCtrl.getMemes)

module.exports = router


