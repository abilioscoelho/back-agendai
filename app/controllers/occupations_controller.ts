import type { HttpContext } from '@adonisjs/core/http'
import { createOccupationValidator } from '#validators/occupation'
import User from '#models/user'

export default class OccupationsController {
  async store({ request, response, params }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      const { ids } = await request.validateUsing(createOccupationValidator)
      await user.related('categories').sync(ids)
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }
}
