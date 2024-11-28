import vine from '@vinejs/vine'

export const createCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
  })
)
export const updateCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
  })
)
