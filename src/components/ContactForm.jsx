import { useState } from 'react'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { propertyTypes, serviceOptions } from '../data/businessData.js'
import { submitConsultation } from '../services/api.js'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  location: '',
  propertyType: '',
  service: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PH_PHONE_PATTERN = /^(\+?63|0)9\d{9}$/

function validate(values) {
  const errors = {}
  const phone = values.phone.replace(/[\s-]/g, '')

  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!phone) errors.phone = 'Please enter your contact number.'
  else if (!PH_PHONE_PATTERN.test(phone))
    errors.phone = 'Enter a valid mobile number, e.g. 0917 123 4567.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.location.trim()) errors.location = 'Please enter your property location.'
  if (!values.propertyType) errors.propertyType = 'Please select a property type.'
  if (!values.service) errors.service = 'Please select a service.'
  if (values.message.length > 1000) errors.message = 'Message must be 1,000 characters or fewer.'

  return errors
}

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && (
          <span className="text-red-700" aria-hidden="true">
            {' *'}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form-error">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    const firstInvalid = Object.keys(validationErrors)[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    setStatus('submitting')
    const payload = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim()]),
    )
    await submitConsultation(payload)
    setStatus('success')
    setValues(initialValues)
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full animate-fade-up flex-col items-center justify-center rounded-3xl bg-white p-8 text-center sm:p-12"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-leaf text-brand-dark">
          <CircleCheck className="size-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Request Received</h3>
        <p className="mt-3 max-w-md leading-relaxed">
          Thank you. Your consultation request has been received. Our team will contact you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-6 font-semibold text-navy hover:bg-mist"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 sm:p-10">
      <h3 className="text-2xl font-bold">Request a Free Consultation</h3>
      <p className="mt-2 text-sm">
        Fields marked with <span className="text-red-700">*</span> are required.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field id="contact-fullName" label="Full Name" error={errors.fullName} required>
            <input type="text" autoComplete="name" placeholder="Juan Dela Cruz" className="form-input" {...fieldProps('fullName')} />
          </Field>
        </div>

        <Field id="contact-phone" label="Contact Number" error={errors.phone} required>
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="0917 123 4567" className="form-input" {...fieldProps('phone')} />
        </Field>

        <Field id="contact-email" label="Email Address" error={errors.email} required>
          <input type="email" autoComplete="email" placeholder="you@example.com" className="form-input" {...fieldProps('email')} />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-location" label="Property Location" error={errors.location} required>
            <input type="text" autoComplete="address-level2" placeholder="e.g. Cabanatuan City, Nueva Ecija" className="form-input" {...fieldProps('location')} />
          </Field>
        </div>

        <Field id="contact-propertyType" label="Property Type" error={errors.propertyType} required>
          <select className="form-input" {...fieldProps('propertyType')}>
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id="contact-service" label="Service Needed" error={errors.service} required>
          <select className="form-input" {...fieldProps('service')}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-message" label="Message" error={errors.message}>
            <textarea
              rows={4}
              maxLength={1000}
              placeholder="Tell us about your property or the issue you are experiencing."
              className="form-input resize-y"
              {...fieldProps('message')}
            />
          </Field>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting ? (
          <>
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
            Sending Request...
          </>
        ) : (
          <>
            Submit Consultation Request
            <Send className="size-5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
