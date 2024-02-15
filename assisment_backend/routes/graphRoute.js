const express = require('express')
const router = express.Router()

const DataPointController =  require('../contollers/graphContoller')

router.get('/',DataPointController.index)
router.post('/show',DataPointController.show)
router.post('/store',DataPointController.store)
router.post('/update',DataPointController.update)
router.post('/delete',DataPointController.destroy)

module.exports = router