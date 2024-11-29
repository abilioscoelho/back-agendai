import vine from '@vinejs/vine'

export const createDayValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)

export const updateDayValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
  })
)
