const express = require('express')
const router = express.Router()
const { adminPanel } = require('../controllers/adminController')

router.get('/', adminPanel)

module.exports = router