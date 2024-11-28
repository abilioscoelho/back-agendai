import vine from '@vinejs/vine'

export const createPatientValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    cpf: vine.string().trim().minLength(11),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('email', value).first()
        return !match
      }),
    phone: vine.string().minLength(10).optional(),
  })
)
export const updatePatientValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
    cpf: vine.string().trim().minLength(11).optional(),
    phone: vine.string().minLength(10).optional(),
  })
)
