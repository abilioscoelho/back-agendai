import type { HttpContext } from '@adonisjs/core/http'
import ServiceDay from '#models/service_day'
import { createServiceDayValidator, updateServiceDayValidator } from '#validators/service_day'

export default class ServiceDaysController {
  async index() {
    const serviceDays = await ServiceDay.query().orderBy('id', 'asc')
    return serviceDays
  }
  async store({ request }: HttpContext) {
    const { name } = await request.validateUsing(createServiceDayValidator)
    const serviceDay = await ServiceDay.create({ name })
    return serviceDay
  }
  async show({ params, response }: HttpContext) {
    try {
      const category = await ServiceDay.findByOrFail('id', params.id)
      return category
    } catch (error) {
      return response.status(400).json({ error: 'service day not  found' })
    }
  }
  async update({ params, request, response }: HttpContext) {
    try {
      const { name } = await request.validateUsing(updateServiceDayValidator)
      const serviceDay = await ServiceDay.findByOrFail('id', params.id)
      serviceDay.merge({ name })
      await serviceDay.save()
      return serviceDay
    } catch (error) {
      return response.status(400).json({ error: 'service day not  found' })
    }
  }
  async destroy({ params, response }: HttpContext) {
    try {
      const serviceDay = await ServiceDay.findByOrFail('id', params.id)
      await serviceDay.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({ error: 'service day not  found' })
    }
  }
}
