import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'
export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Médico' },
      { name: 'Enfermeiro' },
      { name: 'Fisioterapeuta' },
      { name: 'Dentista' },
      { name: 'Nutricionista' },
      { name: 'Psicólogo' },
      { name: 'Farmacêutico' },
      { name: 'Técnico de Enfermagem' },
      { name: 'Terapeuta Ocupacional' },
      { name: 'Fonoaudiólogo' },
    ])
  }
}
