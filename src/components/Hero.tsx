import React from 'react'
import { ArrowDownToLine } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover ">
      <div className="space-y-5">
        <div className="mt-10 flex max-w-[420px] flex-col items-center justify-between space-y-1 ">
          <h1 className="text-6xl font-bold">Adilio Freitas</h1>
          <h2 className="space-y-12 text-sm font-bold text-gray-100">
            Seja bem vindo ao meu portfólio!
          </h2>
          <p className="text-xs font-bold leading-relaxed text-gray-100">
            Venha conhecer um pouco do meu trabalho.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-100">
          <button className="rounded-md bg-white px-4 py-2 text-gray-400 hover:text-gray-900">
            <a
              href="Curriculo_Adilio.pdf"
              download="Curriculo_Adilio.pdf"
              className="flex items-center gap-2 "
              type="application/pdf"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Baixe meu CV
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}
