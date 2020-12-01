import { Admin } from '../../models'

class AdminController {
  static get = (req, res) => Admin.findAll().then(
    (admins) => res.status(200).json(admins)
  ).catch(
    (err) => res.status(400).json({ msg: err })
  )

  static getById = (req, res) => {
    const { id } = req.params

    Admin.findOne({
        where: { id }
      })
      .then((admin) => res.status(200).json(admin))
      .catch((err) => res.status(400).json({ msg: err }))
  }

  static create = (req, res) => {
    const { username, password } = req.body

    Admin.create({
        username,
        password
      })
      .then((admin) => res.status(200).json(admin))
      .catch((err) => res.status(400).json({ msg: err }))
  }

  static update = (req, res) => {
    const { id } = req.params
    const { username, password } = req.body

    Admin.update({
        username,
        password
      }, {
        where: { id }
      })
      .then(() => res.json({ msg: 'SUCCES!' }))
      .catch((err) => res.status(400).json(err))
  }

  static deleteAll = (req, res) => {
    return Admin.destroy({
      truncate: true,
      cascade: true
    }).then(
      (admin) => {
        if (admin) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }

  static delete = (req, res) => {
    const { id } = req.params

    return Admin.destroy({
      where: { id }
    }).then(
      (admin) => {
        if (!admin) return res.status(400).json({ msg: 'Not Found' })

        return res.status(200).json({ msg: 'Deleted' })
      }
    ).catch((err) => res.status(400).json(err))
  }


}

export default AdminController