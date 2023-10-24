'use client'

import { Phone, Disc, Pocket, Mail, Home } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        'service_cid47xg',
        'template_ee7o1pj',
        form.current,
        'alaTW3f-o4EDgXFTQ',
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.error(error)
        },
      )
  }

  const contacts = [
    {
      name: 'WhatsApp',
      description: '+55 85 99820-2691',
      icon: <Phone className="h-10 w-10" />,
    },
    {
      name: 'Email',
      description: 'fernandesjeferson539@gmail.com',
      icon: <Mail className="h-10 w-10" />,
    },
    {
      name: 'Endereço',
      description: 'Fortaleza-CE',
      icon: <Home className="h-10 w-10" />,
    },
  ]
  return (
    <section id="contact" className="border-t border-white/10 bg-blue-800">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2 font-alt text-3xl font-bold">
            <span className="mr-2">Fale</span>
            <span>Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block ps-4">
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label htmlFor="fullName" className="mb-2 block ps-4">
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label htmlFor="email" className="mb-2 block ps-4 ">
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 rounded-md bg-white px-4 py-2 text-blue-700"
                  disabled={loading}
                >
                  {loading && <Disc className="h-4 w-4 animate-spin" />}
                  {success && <Pocket className="h-4 w-4" />}
                  Enviar mensagem
                </button>
                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-200 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  <span className="text-gray-200 ">{contact.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
