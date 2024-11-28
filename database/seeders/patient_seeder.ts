import Patient from '#models/patient'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Patient.createMany([
      {
        name: 'Ana Clara Souza',
        cpf: '123.456.789-01',
        email: 'ana.souza@example.com',
        phone: '(11) 98765-4321',
      },
      {
        name: 'Bruno Silva Oliveira',
        cpf: '234.567.890-12',
        email: 'bruno.oliveira@example.com',
        phone: '(21) 98654-3210',
      },
      {
        name: 'Carlos Eduardo Lima',
        cpf: '345.678.901-23',
        email: 'carlos.lima@example.com',
        phone: '(31) 98543-2109',
      },
      {
        name: 'Daniela Ferreira Santos',
        cpf: '456.789.012-34',
        email: 'daniela.santos@example.com',
        phone: '(41) 98432-1098',
      },
      {
        name: 'Eduardo Pereira Costa',
        cpf: '567.890.123-45',
        email: 'eduardo.costa@example.com',
        phone: '(51) 98321-0987',
      },
      {
        name: 'Fernanda Gomes Rocha',
        cpf: '678.901.234-56',
        email: 'fernanda.rocha@example.com',
        phone: '(61) 98210-9876',
      },
      {
        name: 'Gabriel Almeida Reis',
        cpf: '789.012.345-67',
        email: 'gabriel.reis@example.com',
        phone: '(71) 98109-8765',
      },
      {
        name: 'Helena Ribeiro Martins',
        cpf: '890.123.456-78',
        email: 'helena.martins@example.com',
        phone: '(81) 98098-7654',
      },
      {
        name: 'Igor Carvalho Sousa',
        cpf: '901.234.567-89',
        email: 'igor.sousa@example.com',
        phone: '(91) 97987-6543',
      },
      {
        name: 'Juliana Costa Barreto',
        cpf: '012.345.678-90',
        email: 'juliana.barreto@example.com',
        phone: '(85) 97876-5432',
      },
    ])
  }
}
