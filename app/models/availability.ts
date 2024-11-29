import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Availability extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare start: DateTime

  @column()
  declare end: DateTime

  @column()
  declare interval: number

  @column()
  declare userId: number

  @column()
  declare dayId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
