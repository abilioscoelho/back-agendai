import vine from '@vinejs/vine'

export const createCategoryUserValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.number()),
  })
)
