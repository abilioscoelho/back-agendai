import vine from '@vinejs/vine'

export const createOccupationValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.number()),
  })
)
