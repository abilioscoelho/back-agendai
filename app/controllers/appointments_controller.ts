// import type { HttpContext } from '@adonisjs/core/http'

import Appointment from '#models/appointment'

export default class AppointmentsController {
  async index() {
    const appointments = Appointment.query().preload('users')
    return appointments
  }
}
