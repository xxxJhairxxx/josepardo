import React, { useEffect, useRef, useState } from 'react'
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha'
import { Loader } from '../atoms/Loader'
import { useGenerals } from '@/context/generals.context'
import { useForm } from 'react-hook-form'
import {
  emailPattern,
  formatPhoneNumber,
  namePattern,
  phonePattern,
} from '@/lib/formUtils'
import { baseApi } from '@/lib/baseApi'

interface ContactFormProps {
  form: any
  messages: any
}

export default function ContactForm({ form, messages }: ContactFormProps) {
  const { name, last_name, phone, email, message } = form

  const [captchaResponse, setCaptchaResponse] = useState('')
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const captchaRef = useRef<ReCAPTCHAType>(null)
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string

  const [successForm, setSuccessForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
  })

  const { multilanguage } = useGenerals()

  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response)
    setShowCaptchaError(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm({ mode: 'onChange', shouldUnregister: false })

  const nameValue = watch('name')
  const lastNameValue = watch('last_name')
  const phoneValue = watch('phone')
  const emailValue = watch('email')
  const messageValue = watch('message')

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value)
    setValue('phone', formattedPhoneNumber)
  }

  const sendForm = async () => {
    try {
      await baseApi.post('/ezforms/submit', {
        formData: dataForm,
      })

      setTimeout(() => {
        setSending(false)
        reset()
        setSuccessForm(true)
      }, 2500)

      setTimeout(() => {
        setSuccessForm(false)
      }, 5000)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (data: any) => {
    try {
      if (!captchaResponse) {
        setShowCaptchaError(true)

        return
      }

      setSending(true)

      setDataForm((prevDataForm: any) => ({
        ...prevDataForm,
        name: data.name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      }))
    } catch (error) {
      setCaptchaResponse('')
    }
  }

  useEffect(() => {
    if (
      dataForm.name !== '' &&
      dataForm.phone !== '' &&
      dataForm.email !== ''
    ) {
      sendForm()
    } else {
    }
  }, [dataForm])

  return (
    <div className='contact'>
      <h4 className='contact-title'>{form.title}</h4>
      <p className='contact-text'>{form.text}</p>

      <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>
        <div className='contactForm-input'>
          <label htmlFor={name.name}>
            {name.label}
            <span>*</span>
          </label>
          <input
            {...register('name', {
              required: true,
              pattern: {
                value: namePattern,
                message: messages.invalid_name,
              },
            })}
            className={`contactForm-input-input ${errors.name ? 'error' : ''}`}
          />

          <div className={`error-group ${errors.name && 'error'} `}>
            {errors.name && nameValue?.length > 0 && (
              <span>{String(errors.name.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={last_name.name}>{last_name.label}</label>
          <input
            {...register('last_name', {
              required: false,
              pattern: {
                value: namePattern,
                message: messages.invalid_name,
              },
            })}
            className={`contactForm-input-input ${
              errors.last_name ? 'error' : ''
            }`}
          />
          <div className={`error-group ${errors.last_name && 'error'} `}>
            {errors.last_name && lastNameValue?.length > 0 && (
              <span>{String(errors.last_name.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={phone.name}>
            {phone.label}
            <span>*</span>
          </label>
          <input
            {...register('phone', {
              required: true,
              pattern: {
                value: phonePattern,
                message: messages.invalid_tel,
              },
            })}
            onChange={handlePhoneChange}
            // value={phoneValue}
            className={`contactForm-input-input ${errors.phone ? 'error' : ''}`}
          />
          <div className={`error-group ${errors.phone && 'error'} `}>
            {errors.phone && phoneValue?.length > 0 && (
              <span>{String(errors.phone.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={email.name}>
            {email.label}
            <span>*</span>
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: emailPattern,
                message: messages.invalid_email,
              },
            })}
            className={`contactForm-input-input ${errors.email ? 'error' : ''}`}
          />
          <div className={`error-group ${errors.email && 'error'} `}>
            {errors.email && emailValue?.length > 0 && (
              <span>{String(errors.email.message)}</span>
            )}
          </div>
        </div>

        <div className='contactForm-input'>
          <label htmlFor={message.name}>{message.label}</label>
          <input
            {...register('message', {
              required: false,
            })}
            className={`contactForm-input-input ${
              errors.message ? 'error' : ''
            }`}
          />
          <div className={`error-group ${errors.message && 'error'} `}>
            {errors.message && messageValue?.length > 0 && (
              <span>{String(errors.message.message)}</span>
            )}
          </div>
        </div>

        <div className='relative recaptcha'>
          <ReCAPTCHA
            sitekey={captchaKey}
            onChange={onChangeRecaptcha}
            ref={captchaRef}
          />
          {showCaptchaError && (
            <div className={`error-captcha`}>
              <span className='text-red-500'>
                <i className='icon-warning'></i>
                {multilanguage.lbl_recaptcha}
              </span>
            </div>
          )}
        </div>

        <div className='form-buttom'>
          <button type='submit'>
            {sending ? <Loader /> : multilanguage.lbl_submit}
          </button>
        </div>

        <div className='messages'>
          {successForm && (
            <span className={`feedback-message init`}>
              {messages.mail_sent_ok}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
