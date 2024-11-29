import type { HttpContext } from '@adonisjs/core/http'
import Day from '#models/day'
import { createDayValidator, updateDayValidator } from '#validators/day'

export default class ServiceDaysController {
  async index() {
    const days = await Day.query().orderBy('id', 'asc').preload('users')
    return days
  }
  async store({ request }: HttpContext) {
    const { name } = await request.validateUsing(createDayValidator)
    const day = await Day.create({ name })
    return day
  }
  async show({ params, response }: HttpContext) {
    try {
      const day = await Day.findByOrFail('id', params.id)
      return day
    } catch (error) {
      return response.status(400).json({ error: 'day not found' })
    }
  }
  async update({ params, request, response }: HttpContext) {
    try {
      const { name } = await request.validateUsing(updateDayValidator)
      const day = await Day.findByOrFail('id', params.id)
      day.merge({ name })
      await day.save()
      return day
    } catch (error) {
      return response.status(400).json({ error: 'day not found' })
    }
  }
  async destroy({ params, response }: HttpContext) {
    try {
      const day = await Day.findByOrFail('id', params.id)
      await day.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({ error: 'day not found' })
    }
  }
}
