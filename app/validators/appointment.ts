import vine from '@vinejs/vine'

export const createAppointmentValidator = vine.compile(
  vine.object({
    user_id: vine.number(),
    patient_id: vine.number(),
    date: vine.date(),
    status: vine.enum(['appointment', 'confirmed', 'canceled']),
    interval: vine.number().positive(),
  })
)
