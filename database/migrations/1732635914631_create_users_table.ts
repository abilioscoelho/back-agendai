import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').nullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('token').nullable()
      table.enum('profile', ['tenant', 'professional', 'user']).defaultTo('user')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}