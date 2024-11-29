import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Day extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @manyToMany(() => User, {
    pivotTable: 'category_users',
    localKey: 'id',
    pivotForeignKey: 'category_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'user_id',
  })
  declare users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
