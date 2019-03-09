import React, { useState, useContext } from 'react'
import './contact-form.scss'
import ThanksModal from '../modal/thanks-modal/thanks-modal'
import { ModalDispatch } from '../../contexts/modalContext'
import { thanksData } from '../../utils/const'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = useState()
  const modalDispatch = useContext(ModalDispatch)

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => modalDispatch({ type: 'SET_MODAL', payload: { isActive: true, ModalComponent: ThanksModal, modalData: thanksData } }))
      .catch(error => alert(error))
  }
  return (
    <>
      <h1 className='contact-form-title'> Contact </h1>
      <p className='contact-form-subtitle'>Have a question or want to work together?</p>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
        className='contact-form'
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type='hidden' name='form-name' value='contact' />
        <p className='hidden'>
          <input placeholder='Don’t fill out:{" "}' name='bot-field' onChange={handleChange} />
        </p>
        <p>
          <input placeholder='Your name' type='text' name='name' onChange={handleChange} />
        </p>
        <p>
          <input placeholder='Your email' type='email' name='email' onChange={handleChange} />
        </p>
        <p>
          <textarea placeholder='Your message' type='text' name='message' onChange={handleChange} />
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </>
  )
}

export default ContactForm
