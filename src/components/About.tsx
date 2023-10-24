import Image from 'next/image'
import screenSwift from '../assets/screenSwift.svg'

export function About() {
  return (
    <div className=" border-t border-white/10">
      <div className="bg-gradient-to-r from-red-900 via-red-600 to-red-400">
        <div className="container grid grid-cols-1 bg-[url(../assets/bg-stars.svg)] bg-cover md:grid-cols-2">
          <div className="p-12">
            <p className="text-lg font-bold leading-tight text-gray-50 md:text-5xl">
              Olá, me chamo Adilio! <br></br> Estou buscando uma oportunidade no
              Apple Academy Developer.
            </p>
          </div>

          <div className="flex-1">
            <div>
              <Image
                src={screenSwift}
                height={400}
                width={400}
                alt="hello"
                className="ml-4 mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
