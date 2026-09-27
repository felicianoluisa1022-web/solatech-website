// Placeholder API layer. The current version uses local mock data only.
// When the Laravel backend is ready, set VITE_API_BASE_URL and replace the
// mock implementations below with real fetch() calls to these endpoints.

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export const API_ENDPOINTS = {
  consultations: '/api/consultations', // POST
  contact: '/api/contact', // POST
  projects: '/api/projects', // GET
  services: '/api/services', // GET
  faqs: '/api/faqs', // GET
}

const MOCK_DELAY_MS = 600

/**
 * Submits a consultation request.
 * Future implementation:
 *   fetch(`${API_BASE_URL}${API_ENDPOINTS.consultations}`, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 */
export function submitConsultation(payload) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, data: payload }), MOCK_DELAY_MS)
  })
}
