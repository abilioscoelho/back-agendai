import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        name: 'Abílio Soares Coelho',
        email: 'abiliocoelho@gmail.com',
        password: 'secret',
        profile: 'professional',
      },
      {
        name: 'Mateus Soares Coelho',
        email: 'mateuscoelho@gmail.com',
        password: 'secret',
        profile: 'professional',
      },
    ])
  }
}
