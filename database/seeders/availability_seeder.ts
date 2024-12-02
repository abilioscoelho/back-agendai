import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const abilio = await User.findBy('email', 'abiliocoelho@gmail.com')
    await abilio?.related('days').sync({
      [1]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 10,
      },
      [2]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 20,
      },
      [3]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 30,
      },
      [4]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 40,
      },
      [5]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 50,
      },
    })
    const mateus = await User.findBy('email', 'mateuscoelho@gmail.com')
    await mateus?.related('days').sync({
      [1]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 10,
      },
      [3]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 10,
      },
      [5]: {
        start: '08:00:00',
        end: '18:00:00',
        interval: 10,
      },
    })
  }
}
