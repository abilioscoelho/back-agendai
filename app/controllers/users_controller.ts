import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index() {
    const users = await User.all()
    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { name, email, password, profile } = await request.validateUsing(createUserValidator)
    const user = await User.create({ name, email, password, profile })
    return user
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      return user
    } catch (error) {
      return response.status(400).json({ error: 'user not  found' })
    }
  }

  /**
   * Handle form submission for the edit action
   */
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

  /**
   * Delete record
   */
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
