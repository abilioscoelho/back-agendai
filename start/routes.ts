const UserController = () => import('#controllers/users_controller')

import router from '@adonisjs/core/services/router'

router.resource('/user', UserController).apiOnly()
