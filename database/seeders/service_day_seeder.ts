import ServiceDay from '#models/service_day'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ServiceDay.createMany([
      { name: 'Segunda-Feira' },
      { name: 'Terça-Feira' },
      { name: 'Quarta-Feira' },
      { name: 'Quinta-Feira' },
      { name: 'Sexta-Feira' },
      { name: 'Sábado' },
      { name: 'Domingo' },
    ])
  }
}
