import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const abilio = await User.findBy('email', 'abiliocoelho@gmail.com')
    await abilio?.related('days').sync({
      [1]: {
        start: new Date(),
        end: new Date(),
        interval: 10,
      },
      [2]: {
        start: new Date(),
        end: new Date(),
        interval: 20,
      },
      [3]: {
        start: new Date(),
        end: new Date(),
        interval: 30,
      },
      [4]: {
        start: new Date(),
        end: new Date(),
        interval: 40,
      },
      [5]: {
        start: new Date(),
        end: new Date(),
        interval: 50,
      },
    })
    const mateus = await User.findBy('email', 'mateuscoelho@gmail.com')
    await mateus?.related('days').sync({
      [1]: {
        start: new Date(),
        end: new Date(),
        interval: 10,
      },
      [3]: {
        start: new Date(),
        end: new Date(),
        interval: 10,
      },
      [5]: {
        start: new Date(),
        end: new Date(),
        interval: 10,
      },
    })
  }
}
