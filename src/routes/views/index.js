import express from 'express'
import ViewController from '../../controllers/ViewController'
import GameController from '../../controllers/GameController'

const router = express.Router()

router.get('/', ViewController.getHomeView)
router.get('/dashboard', ViewController.getDashboardView)
router.get('/biodata', ViewController.getDetailsView)
router.get('/history', ViewController.getHistoryView)
router.get('/allbiodata', ViewController.getAllDetailsView)

// LOGIN
router.get('/login/admin', ViewController.getAdminLoginView)
router.get('/login/player', ViewController.getPlayerLoginView)

// FORMS
router.get('/createUser', ViewController.getUserFormsView)
router.get('/editUser', ViewController.getEditUserFormsView)
router.get('/createBiodata', ViewController.getDetailFormsView)

// GAME
router.get('/game', GameController.getIndexView)
router.get('/game/history', GameController.getHistoryView)

export default router