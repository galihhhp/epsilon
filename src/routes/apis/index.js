import express from 'express'
import UserController from '../../controllers/UserController'
import BiodataController from '../../controllers/BiodataController'
import HistoryController from '../../controllers/HistoryController'
import GameController from '../../controllers/GameController'
import AdminController from '../../controllers/AdminController'

const router = express.Router()

router.get('/all', UserController.getAll)
router.get('/users', UserController.get)
router.get('/users/:id', UserController.getById)
router.post('/users', UserController.create)
router.post('/users/all', UserController.createAll)
router.patch('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)
router.delete('/users/del/all', UserController.deleteAll)

router.get('/bios', BiodataController.get)
router.get('/bios/:id', BiodataController.getById)
router.post('/bios', BiodataController.create)
router.patch('/bios/:id', BiodataController.update)
router.delete('/bios/:id', BiodataController.delete)

router.get('/histories', HistoryController.get)
router.get('/histories/:id', HistoryController.getById)
router.post('/histories/:id', HistoryController.create)
router.patch('/histories/:id', HistoryController.update)
router.delete('/histories/:id', HistoryController.delete)

router.get('/admin', AdminController.get)
router.get('/admin/:id', AdminController.getById)
router.post('/admin', AdminController.create)
router.patch('/admin/:id', AdminController.update)
router.delete('/admin/del/all', AdminController.deleteAll)
router.delete('/admin/:id', AdminController.delete)

router.get('/history', GameController.getHistory)
router.get('/compChoice', GameController.getCompChoice)
router.post('/history', GameController.createHistory)
router.delete('/history', GameController.deleteHistory)

export default router