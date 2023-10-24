'use client'
import { Laptop, Smartphone, LayoutGrid } from 'lucide-react'

interface ServicesProps {}

export function Services(props: ServicesProps) {
  const services = [
    {
      title: 'Data Science',
      description:
        'Desenvolvimento de modelos probabílisticos utilizando JupiterLab em Python',
      icon: <Laptop className="h-12 w-12" />,
    },
    {
      title: 'Mobile',
      description:
        'Desenvolvimento de Aplicativos IOS utilizando Swift/SwiftUI',
      icon: <Smartphone className="h-12 w-12" />,
    },
    {
      title: 'UI/UX',
      description:
        'Estudos sobre a experiência do usuário em relação a usabilidade de uma aplicação',
      icon: <LayoutGrid className="h-12 w-12" />,
    },
  ]

  return (
    <section className="max-w-4x1 container mx-auto my-12 p-4">
      <div className="p-4 text-center">
        <p className="text-sm uppercase "></p>

        <h2 className="mb-2 font-alt text-3xl font-bold">
          <span className="mr-2 font-alt">Meus</span>
          <span className="font-alt text-red-500">Serviços</span>
        </h2>
      </div>
      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services?.map((item, index) => (
          <div className="basis-1/3 rounded-lg  p-4" key={index}>
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-x1 font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
