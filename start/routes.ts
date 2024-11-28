const SessionController = () => import('#controllers/session_controller')
const UserController = () => import('#controllers/users_controller')
const CategoryController = () => import('#controllers/categories_controller')
const CategoryUserController = () => import('#controllers/category_users_controller')

import { middleware } from './kernel.js'

import router from '@adonisjs/core/services/router'

router.post('/session', [SessionController, 'store'])
router.get('/session', [SessionController, 'show']).use(middleware.auth())
router.delete('/session', [SessionController, 'destroy']).use(middleware.auth())

router.group(() => {
  router.resource('/user', UserController).apiOnly()
  router.post('/user/:id/category', [CategoryUserController, 'store'])
  router.resource('/category', CategoryController).apiOnly()
})
// .use(middleware.auth())
