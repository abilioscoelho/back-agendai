import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Patient from './patient.js'

export default class Appointment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare patientd: number

  @column()
  declare date: DateTime

  @column()
  declare status: 'appointment' | 'confirmed' | 'canceled'

  @belongsTo(() => User)
  declare users: BelongsTo<typeof User>

  @belongsTo(() => Patient)
  declare patients: BelongsTo<typeof Patient>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
