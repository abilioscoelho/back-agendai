import vine from '@vinejs/vine'

export const createServiceDayValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)

export const updateServiceDayValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
  })
)
