import vine from '@vinejs/vine'

export const createAvailabilityValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.number()),
    start: vine.date(),
    end: vine.date(),
    interval: vine.number().positive(),
  })
)
