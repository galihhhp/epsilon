import express from 'express'
import ViewController from '../../controllers/ViewController'
import GameController from '../../controllers/GameController'

const router = express.Router()

router.get('/', ViewController.getHomeView)
router.get('/dashboard', ViewController.getDashboardView)
router.get('/details', ViewController.getDetailsView)
router.get('/history', ViewController.getHistoryView)
router.get('/alldetails', ViewController.getAllDetailsView)

// LOGIN
router.get('/admin', ViewController.getAdminLoginView)

// FORMS
router.get('/createUser', ViewController.getUserFormsView)
router.get('/editUser', ViewController.getEditUserFormsView)
router.get('/createDetail', ViewController.getDetailFormsView)

// GAME
router.get('/game', GameController.getIndexView)
router.get('/game/history', GameController.getHistoryView)

export default router