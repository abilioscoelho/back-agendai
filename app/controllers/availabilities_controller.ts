import User from '#models/user'
import { createAvailabilityValidator } from '#validators/availability'
import type { HttpContext } from '@adonisjs/core/http'

export default class AvailabilitiesController {
  async store({ request, response, params }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      const { ids, start, end, interval } = await request.validateUsing(createAvailabilityValidator)
      ids.map(async (id) => {
        await user.related('days').sync({
          [id]: {
            start,
            end,
            interval,
          },
        })
      })
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }
}
