import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const abilio = await User.findBy('email', 'abiliocoelho@gmail.com')
    await abilio?.related('categories').sync([1])
    const mateus = await User.findBy('email', 'mateuscoelho@gmail.com')
    await mateus?.related('categories').sync([1, 2])
  }
}
