const express=require('express')
const router=express.Router()
const
	{
		adminLogin,
	    getAllUsers,
	    deleteUser,
		getUser,
		editUser
     } = require('../controllers/adminControllers')

router.route('/').post(adminLogin)
router.route('/home').get(getAllUsers)
router.route('/delete/:id').delete(deleteUser)

router.route('/editUser/:id').get(getUser)
router.route('/editUser/:id').put(editUser)


module.exports = router