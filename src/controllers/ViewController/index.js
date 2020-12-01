import {get, getById } from '../UserController'
import fetch from 'node-fetch'
import { json } from 'express'

class ViewController {
  static getHomeView = (req, res) => {
    res.render('homepage')
  }

  static getDashboardView = (req, res) => {
    // const apis = `http://localhost:3000/apis/users`
    // const user = json(apis)
    // const options = {
    //   method: 'GET'
    // }

    // fetch(apis, options)
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(() => res.render('dashboard', {
    //     users: user
    //   })).catch((err) => {
    //     if (err.response) {
    //       console.log(err.response.data);
    //       console.log(err.response.status);
    //       console.log(err.response.headers);
    //     } else if (err.requiest) {
    //       console.log(err.requiest);
    //     } else {
    //       console.log('Error', err.message);
    //     }
    //   })

    res.render('showDashboard')
  }

  static getDetailsView = (req, res) => {
    res.render('showDetails')
  }

  static getAllDetailsView = (req, res) => {
    res.render('showAllDetails')
  }

  static getHistoryView = (req, res) => {
    res.render('showHistory')
  }

  static getAdminLoginView = (req, res) => {
    res.render('loginAdmin')
  }

  static getPlayerLoginView = (req, res) => {
    res.render('loginUser')
  }

  static getUserFormsView = (req, res) => {
    res.render('formUser')
  }

  static getDetailFormsView = (req, res) => {
    res.render('formBio')
  }

  static getEditUserFormsView = (req, res) => {
    res.render('formEditUser')
  }
}

export default ViewController