import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
  async index() {
    const users = await User.all()
    return users
  }

  async store({ request }: HttpContext) {
    const { name, email, password, profile } = await request.validateUsing(createUserValidator)
    const user = await User.create({ name, email, password, profile })
    return user
  }

  async show({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      return user
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      const { name, password, profile } = await request.validateUsing(updateUserValidator)
      user.merge({ name, password, profile })
      await user.save()
      return user
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      await user.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }
}
