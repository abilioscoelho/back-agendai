import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'

export default class CategoriesController {
  async index() {
    const categories = await Category.query().preload('users')
    return categories
  }
  async store({ request }: HttpContext) {
    const { name } = await request.validateUsing(createCategoryValidator)
    const category = await Category.create({ name })
    return category
  }
  async show({ params, response }: HttpContext) {
    try {
      const category = await Category.findByOrFail('id', params.id)
      return category
    } catch (error) {
      return response.status(400).json({ error: 'category not  found' })
    }
  }
  async update({ params, request, response }: HttpContext) {
    try {
      const { name } = await request.validateUsing(updateCategoryValidator)
      const category = await Category.findByOrFail('id', params.id)
      category.merge({ name })
      await category.save()
      return category
    } catch (error) {
      return response.status(400).json({ error: 'category not  found' })
    }
  }
  async destroy({ params, response }: HttpContext) {
    try {
      const category = await Category.findByOrFail('id', params.id)
      await category.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({ error: 'category not  found' })
    }
  }
}
