'use client'

import { Phone, Mail, Home } from 'lucide-react'

export function Contact() {
  const contacts = [
    {
      name: 'WhatsApp',
      description: '+55 85 99218-7702',
      icon: <Phone className="h-10 w-10" />,
    },
    {
      name: 'Email',
      description: 'adiliofreitaswork@gmail.com',
      icon: <Mail className="h-10 w-10" />,
    },
    {
      name: 'Endereço',
      description: 'Fortaleza-CE',
      icon: <Home className="h-10 w-10" />,
    },
  ]
  return (
    <section id="contact" className="border-t border-white/10 bg-red-800">
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
          <div>
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
