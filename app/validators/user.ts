import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('email', value).first()
        return !match
      }),
    password: vine.string().minLength(6),
    profile: vine.enum(['tenant', 'professional', 'user']).optional(),
  })
)
export const updateUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
    password: vine.string().minLength(6).optional(),
    profile: vine.enum(['tenant', 'professional', 'user']).optional(),
  })
)
