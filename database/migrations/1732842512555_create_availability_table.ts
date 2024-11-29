import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'availabilities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime('start').notNullable()
      table.dateTime('end').notNullable()
      table.integer('interval').notNullable()
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('day_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('days')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.unique(['user_id', 'day_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
