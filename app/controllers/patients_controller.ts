import Patient from '#models/patient'
import { createPatientValidator, updatePatientValidator } from '#validators/patient'
import type { HttpContext } from '@adonisjs/core/http'

export default class PatientsController {
  async index() {
    const patients = await Patient.all()
    return patients
  }

  async store({ request }: HttpContext) {
    const { name, cpf, email, phone } = await request.validateUsing(createPatientValidator)
    const patient = await Patient.create({ name, cpf, email, phone })
    return patient
  }

  async show({ params, response }: HttpContext) {
    try {
      const patient = await Patient.findByOrFail('id', params.id)
      return patient
    } catch (error) {
      return response.status(400).json({ error: 'Patient not  found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const patient = await Patient.findByOrFail('id', params.id)
      const { name, cpf, phone } = await request.validateUsing(updatePatientValidator)
      patient.merge({ name, cpf, phone })
      await patient.save()
      return patient
    } catch (error) {
      return response.status(400).json({ error: 'Patient not  found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const patient = await Patient.findByOrFail('id', params.id)
      await patient.delete()
      return response.status(203)
    } catch (error) {
      return response.status(400).json({ error: 'Patient not  found' })
    }
  }
}
