import { useState } from 'react'

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: 'Project inquiry',
  message: '',
}

export default function Contact() {
  // Controlled inputs: React state is the single source of truth for the form,
  // so validation and reset are plain state operations.
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { id, value } = event.target
    setForm((current) => ({ ...current, [id]: value }))

    // Clear a field's error as soon as the user starts correcting it, rather
    // than leaving it red until the next submit.
    setErrors((current) => {
      if (!current[id]) return current
      const next = { ...current }
      delete next[id]
      return next
    })
  }

  const validate = () => {
    const found = {}
    if (!form.name.trim()) found.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      found.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) found.message = 'Please enter a message.'
    return found
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    alert(`Thank you, ${form.name.trim()}! Your message has been sent.`)
    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="row contact-banner g-0">
          <div className="col-lg-7 contact-form-col p-4 p-md-5">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-heading-sm">Contact Me</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    placeholder="Johnbel Malinana"
                    value={form.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div className="invalid-feedback" id="name-error">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className={`form-control${errors.email ? ' is-invalid' : ''}`}
                    placeholder="jbel@company.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div className="invalid-feedback" id="email-error">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`form-control${errors.message ? ' is-invalid' : ''}`}
                  placeholder="Tell me about your project.."
                  value={form.message}
                  onChange={handleChange}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <div className="invalid-feedback" id="message-error">
                    {errors.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-accent px-4">
                Send message &rarr;
              </button>
            </form>
          </div>

          <div className="col-lg-5 contact-profile-col p-4 p-md-5">
            <h3 className="contact-headline">
              Let&apos;s work
              <br />
              together
            </h3>

            <p className="fw-semibold mb-1">Johnbel Maliñana</p>
            <p className="contact-email mb-3">jbel@company.com</p>

            <p className="body-text mb-3">
              I&apos;m open to development and design work, short or long-term.
              From backend logic to landing pages to UI/UX.
            </p>
            <p className="body-text mb-4">
              Large-scale system design, data-driven applications, or a landing
              page done right — let&apos;s talk.
            </p>

            <ul className="contact-links list-unstyled mb-0">
              <li>
                <a href="mailto:malinanajohnbel@gmail.com">
                  <span className="contact-link-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  malinanajohnbel@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/johnbel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    in
                  </span>
                  linkedin.com/in/johnbel
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jbel02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.55 7.55 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                  github.com/Jbel02
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
