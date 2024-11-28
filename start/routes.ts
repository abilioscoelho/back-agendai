const SessionController = () => import('#controllers/session_controller')
const UserController = () => import('#controllers/users_controller')
const CategoryController = () => import('#controllers/categories_controller')
const OccupationController = () => import('#controllers/occupations_controller')
const PatientController = () => import('#controllers/patients_controller')
const ServiceDayController = () => import('#controllers/service_days_controller')

import { middleware } from './kernel.js'

import router from '@adonisjs/core/services/router'

router.post('/session', [SessionController, 'store'])
router.get('/session', [SessionController, 'show']).use(middleware.auth())
router.delete('/session', [SessionController, 'destroy']).use(middleware.auth())

router.group(() => {
  router.resource('/user', UserController).apiOnly()
  router.post('/user/:id/category', [OccupationController, 'store'])
  router.resource('/category', CategoryController).apiOnly()
  router.resource('/patient', PatientController).apiOnly()
  router.resource('/days', ServiceDayController).apiOnly()
})
// .use(middleware.auth())
