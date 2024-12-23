import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'
import Category from './category.js'
import Day from './day.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare token: string | null

  @column()
  declare profile: 'tenant' | 'professional' | 'user'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @manyToMany(() => Category, {
    pivotTable: 'occupations',
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'category_id',
  })
  declare categories: ManyToMany<typeof Category>

  @manyToMany(() => Day, {
    pivotTable: 'availabilities',
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'day_id',
    pivotColumns: ['start', 'end', 'interval'],
  })
  declare days: ManyToMany<typeof Day>

  serializeExtras() {
    return {
      availabilities: {
        start: this.$extras.pivot_start,
        end: this.$extras.pivot_end,
        interval: this.$extras.pivot_interval,
      },
    }
  }

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
