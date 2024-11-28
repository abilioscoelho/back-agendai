import type { HttpContext } from '@adonisjs/core/http'
import { createCategoryUserValidator } from '#validators/category_user'
import User from '#models/user'

export default class CategoryUsersController {
  async store({ request, response, params }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      const { ids } = await request.validateUsing(createCategoryUserValidator)
      await user.related('categories').sync(ids)
    } catch (error) {
      console.log(error)
      return response.status(400).json({ error: 'user not  found' })
    }
  }
}
