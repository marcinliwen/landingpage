import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div className="field">
        <label className="label" htmlFor={'name'}>
          Imię
        </label>
        <div className="control">
          <input
            className="input"
            type={'text'}
            name={'name'}
            onChange={handleChange}
            id={'name'}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={'email'}>
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type={'email'}
            name={'email'}
            onChange={handleChange}
            id={'email'}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={'phone'}>
          Telefon
        </label>
        <div className="control">
          <input
            className="input"
            type={'tel'}
            name={'phone'}
            onChange={handleChange}
            id={'phone'}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={'message'}>
          Wiadomość
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={'message'}
            onChange={handleChange}
            id={'message'}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <button className="cfa-btn is-link" type="submit">
          Wyślij
        </button>
      </div>
    </form>
  )
}
